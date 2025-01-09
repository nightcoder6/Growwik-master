import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const InfluencerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    minlength: 10, // Corrected casing
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
      validator: function(v) {
        // This regex allows for:
        // - Optional plus sign at the start
        // - Optional country code
        // - Groups of digits with optional spaces or hyphens
        // - Minimum length of 10 digits (excluding formatting characters)
        return /^\+?[\d\s-]{10,}$/.test(v.replace(/[\s-]/g, ''));
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    // Clean the phone number before saving
    set: function(v) {
      // Remove all spaces and hyphens to store in a consistent format
      return v ? v.replace(/\s+/g, '').replace(/-+/g, '') : v;
    }
  },
  platforms: {
    type: [String], // Specify array of strings
    default: [], // Default to empty array
  },
  instaId: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null, // Optional clarity
  },
  youtubeId: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null, // Optional clarity
  },
  followersCount: {
    type: Number, // Changed to Number for numeric representation
    default: 0, // Default to zero if not provided
  },
  genre: {
    type: [String], // Specify array of strings
    default: [], // Default to empty array
  },
});

const Influencer = models.Influencer || model("Influencer", InfluencerSchema);

export default Influencer;
