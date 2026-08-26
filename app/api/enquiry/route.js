import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9]{7,15}$/;

const COUNTRY_CODES = [
  '+91',
  '+1',
  '+44',
  '+61',
  '+971',
  '+65',
];

const HOTEL_CATEGORIES = [
  'Standard',
  'Deluxe',
  'Luxury',
];

function isFutureDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const selected = new Date(`${value}T00:00:00`);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    !Number.isNaN(selected.getTime()) &&
    selected > today
  );
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      countryCode,
      contactNumber,
      email,
      dateOfTravel,
      numberOfPeople,
      hotelCategory,
      numberOfChildren,
      destination = '',
    } = body;

    const phone = String(contactNumber ?? '')
      .replace(/\s|[-()]/g, '');

    const people = Number(numberOfPeople);
    const children = Number(numberOfChildren);

    // Full name validation
    if (!String(fullName ?? '').trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Full name is required.',
        },
        { status: 400 }
      );
    }

    // Country code validation
    if (!COUNTRY_CODES.includes(countryCode)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please select a valid country code.',
        },
        { status: 400 }
      );
    }

    // Phone validation
    if (!PHONE_PATTERN.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid contact number.',
        },
        { status: 400 }
      );
    }

    // Email validation
    if (!EMAIL_PATTERN.test(String(email ?? '').trim())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      );
    }

    // Travel date validation
    if (!isFutureDate(String(dateOfTravel ?? ''))) {
      return NextResponse.json(
        {
          success: false,
          message: 'Travel date must be a valid future date.',
        },
        { status: 400 }
      );
    }

    // Number of people validation
    if (
      !Number.isInteger(people) ||
      people < 1 ||
      people > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Number of people must be between 1 and 100.',
        },
        { status: 400 }
      );
    }

    // Hotel category validation
    if (!HOTEL_CATEGORIES.includes(hotelCategory)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please select a valid hotel category.',
        },
        { status: 400 }
      );
    }

    // Number of children validation
    if (
      !Number.isInteger(children) ||
      children < 0 ||
      children > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Number of children must be between 0 and 100.',
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Save enquiry
    await Enquiry.create({
      fullName: String(fullName).trim(),
      countryCode,
      contactNumber: phone,
      email: String(email).trim().toLowerCase(),
      dateOfTravel: new Date(`${dateOfTravel}T00:00:00`),
      numberOfPeople: people,
      hotelCategory,
      numberOfChildren: children,
      destination: String(destination).trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry submitted successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    // Show the real error in VS Code terminal
    console.error('ENQUIRY API ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          'Unable to process your enquiry right now.',
      },
      { status: 500 }
    );
  }
}