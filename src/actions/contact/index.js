"use server";

import createConnection from "@/db";
import Contact from "@/schema/contact.model.js";

export async function setContact(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newUser = await Contact.create(data);

    if (newUser) {
      return {
        status: "success",
        message: "Contact created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Contact creation failed",
      };
    }
  } catch (err) {
    console.log(err);

    return {
      status: "error",
      message: "Contact creation failed",
    };
  }
}
