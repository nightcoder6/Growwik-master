import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const BrandSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Please provide your brand name"],
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 2000,
    trim: true,
    default: null, // Optional clarity
  },
  platforms: {
    type: [String], // Specify array of strings
    default: [], // Default to an empty array
  },
  campaign: {
    type: [String], // Specify array of strings
    default: [],
  },
  content: {
    type: [String], // Specify array of strings
    default: [],
  },
  industry: {
    type: [String], // Specify array of strings
    default: [],
  },
  budget: {
    type: String,
    maxlength: 10,
    trim: true,
    default: null, // Optional clarity
  },
  email: {
    type: String,
    minlength: 10, // Corrected to lowercase
    required: [true, "Please provide your email"],
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter a valid email address",
    ],
  },
  phoneNo: {
    type: String,
    required: [true, "Please provide a valid phone number"],
    validate: {
      validator: function (v) {
        // This regex allows for:
        // - Optional plus sign at the start
        // - Optional country code
        // - Groups of digits with optional spaces or hyphens
        // - Minimum length of 10 digits (excluding formatting characters)
        return /^\+?[\d\s-]{10,}$/.test(v.replace(/[\s-]/g, ""));
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    // Clean the phone number before saving
    set: function (v) {
      // Remove all spaces and hyphens to store in a consistent format
      return v ? v.replace(/\s+/g, "").replace(/-+/g, "") : v;
    },
  },
});

const Brand = models.Brand || model("Brand", BrandSchema);

export default Brand;
