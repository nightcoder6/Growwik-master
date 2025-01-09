"use server";

import createConnection from "@/db";
import Influencer from "@/schema/influencer.model.js";

export async function setInfluencer(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newUser = await Influencer.create(data);

    if (newUser) {
      return {
        status: "success",
        message: "Influencer created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Influencer creation failed",
      };
    }
  } catch (err) {
    console.log(err);

    return {
      status: "error",
      message: "Influencer creation failed",
    };
  }
}