"use server";

import createConnection from "@/db";
import Brand from "@/schema/brand.model.js";

export async function setBrand(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newBrand = await Brand.create(data);

    if (newBrand) {
      return {
        status: "success",
        message: "Brand created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Brand creation failed",
      };
    }
  } catch (err) {
    console.log(err);

    return {
      status: "error",
      message: "Brand creation failed",
    };
  }
}
