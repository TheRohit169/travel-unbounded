import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 100 },
  contactNumber: { type: String, required: true, trim: true, maxlength: 20 },
  countryCode: { type: String, required: true, enum: ['+91', '+1', '+44', '+61', '+971', '+65'] },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  dateOfTravel: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true, min: 1, max: 100 },
  hotelCategory: { type: String, required: true, enum: ['Standard', 'Deluxe', 'Luxury'] },
  numberOfChildren: { type: Number, required: true, min: 0, max: 100 },
  destination: { type: String, trim: true, maxlength: 100 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
