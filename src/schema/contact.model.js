import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    minlength: 10,
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter a valid email address",
    ],
  },
  contact: {
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
  company: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null,
  },
  message: {
    type: String,
    maxlength: 500,
    default: null,
  },
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;