'use client';

import { useMemo, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const countries = [
  ['+91', 'India'], ['+1', 'USA/Canada'], ['+44', 'UK'], ['+61', 'Australia'], ['+971', 'UAE'], ['+65', 'Singapore']
];

const initialForm = {
  fullName: '', countryCode: '+91', contactNumber: '', email: '', dateOfTravel: '', numberOfPeople: 1, hotelCategory: '', numberOfChildren: 0
};

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60 * 1000).toISOString().split('T')[0];
}

export default function BookingForm({ destination = '' }) {
  const [form, setForm] = useState({ ...initialForm });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState('');
  const minDate = useMemo(() => getToday(), []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setServerError('');
  };

  const validate = () => {
    const nextErrors = {};
    const phone = String(form.contactNumber).replace(/\s|[-()]/g, '');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;

    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!form.countryCode) nextErrors.countryCode = 'Please select a country code.';
    if (!form.contactNumber.trim()) nextErrors.contactNumber = 'Please enter your contact number.';
    else if (!phonePattern.test(phone)) nextErrors.contactNumber = 'Enter a valid phone number.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!form.dateOfTravel) nextErrors.dateOfTravel = 'Please select your travel date.';
    else if (form.dateOfTravel <= minDate) nextErrors.dateOfTravel = 'Travel date must be after today.';
    if (Number(form.numberOfPeople) < 1) nextErrors.numberOfPeople = 'At least 1 traveller is required.';
    if (!form.hotelCategory) nextErrors.hotelCategory = 'Please select a hotel category.';
    if (Number(form.numberOfChildren) < 0) nextErrors.numberOfChildren = 'Children cannot be negative.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setStatus('loading');
    setServerError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, numberOfPeople: Number(form.numberOfPeople), numberOfChildren: Number(form.numberOfChildren), destination })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to submit enquiry.');
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setServerError('We could not submit your enquiry right now. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[28px] border border-emerald-900/10 bg-white p-8 text-center shadow-soft sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-2xl text-forest">✓</div>
        <h2 className="mt-6 text-3xl font-black text-forest">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">Your travel enquiry has been received successfully. Our travel expert will contact you within 24 hours.</p>
        <button type="button" onClick={() => { setForm({ ...initialForm }); setStatus('idle'); }} className="focus-ring mt-8 rounded-full bg-forest px-6 py-3 font-bold text-white hover:bg-moss">Submit another enquiry</button>
      </div>
    );
  }

  const fieldClass = (name) => `focus-ring mt-2 w-full rounded-2xl border bg-[#fbfaf6] px-4 py-3.5 text-sm outline-none transition ${errors[name] ? 'border-red-400' : 'border-slate-200 focus:border-forest'}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[28px] border border-emerald-900/10 bg-white p-5 shadow-soft sm:p-8">
      {destination && <div className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-forest">Planning a journey to <strong>{destination}</strong>? Tell us what you need.</div>}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name *</label>
          <input id="fullName" name="fullName" value={form.fullName} onChange={updateField} className={fieldClass('fullName')} autoComplete="name" />
          {errors.fullName && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="countryCode" className="text-sm font-bold text-slate-700">Country Code *</label>
          <select id="countryCode" name="countryCode" value={form.countryCode} onChange={updateField} className={fieldClass('countryCode')}>
            {countries.map(([code, label]) => <option key={code} value={code}>{code} {label}</option>)}
          </select>
          {errors.countryCode && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.countryCode}</p>}
        </div>
        <div>
          <label htmlFor="contactNumber" className="text-sm font-bold text-slate-700">Contact Number *</label>
          <input id="contactNumber" name="contactNumber" type="tel" inputMode="numeric" value={form.contactNumber} onChange={updateField} className={fieldClass('contactNumber')} autoComplete="tel" placeholder="9876543210" />
          {errors.contactNumber && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.contactNumber}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-bold text-slate-700">Email *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={updateField} className={fieldClass('email')} autoComplete="email" placeholder="you@example.com" />
          {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="dateOfTravel" className="text-sm font-bold text-slate-700">Date of Travel *</label>
          <input id="dateOfTravel" name="dateOfTravel" type="date" min={minDate} value={form.dateOfTravel} onChange={updateField} className={fieldClass('dateOfTravel')} />
          {errors.dateOfTravel && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.dateOfTravel}</p>}
        </div>
        <div>
          <label htmlFor="numberOfPeople" className="text-sm font-bold text-slate-700">Number of People *</label>
          <input id="numberOfPeople" name="numberOfPeople" type="number" min="1" value={form.numberOfPeople} onChange={updateField} className={fieldClass('numberOfPeople')} />
          {errors.numberOfPeople && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.numberOfPeople}</p>}
        </div>
        <div>
          <label htmlFor="hotelCategory" className="text-sm font-bold text-slate-700">Hotel Category *</label>
          <select id="hotelCategory" name="hotelCategory" value={form.hotelCategory} onChange={updateField} className={fieldClass('hotelCategory')}>
            <option value="">Select category</option><option>Standard</option><option>Deluxe</option><option>Luxury</option>
          </select>
          {errors.hotelCategory && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.hotelCategory}</p>}
        </div>
        <div>
          <label htmlFor="numberOfChildren" className="text-sm font-bold text-slate-700">Number of Children</label>
          <input id="numberOfChildren" name="numberOfChildren" type="number" min="0" value={form.numberOfChildren} onChange={updateField} className={fieldClass('numberOfChildren')} />
          {errors.numberOfChildren && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.numberOfChildren}</p>}
        </div>
      </div>
      {serverError && <div role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700"><strong>Something went wrong.</strong><br />{serverError}</div>}
      <button disabled={status === 'loading'} type="submit" className="focus-ring mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-forest px-6 py-4 font-extrabold text-white transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'loading' ? <><LoadingSpinner /> Submitting...</> : <>Send Enquiry <span aria-hidden="true">→</span></>}
      </button>
      <p className="mt-4 text-center text-xs text-slate-500">Your details are used only to plan and respond to your travel enquiry.</p>
    </form>
  );
}
