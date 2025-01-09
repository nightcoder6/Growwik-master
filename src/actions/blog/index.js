"use server";

import createConnection from "@/db";
import Blog from "@/schema/blog.model.js";

//post blog
export const postBlog = async (data) => {
  try {
    await createConnection();

    const newBlog = await Blog.create(data);

    if (newBlog) {
      return {
        status: "success",
        message: "Blog created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Blog creation failed",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Blog creation failed",
    };
  }
};

//fetch all blog
export const getAllBlog = async () => {
  try {
    await createConnection();
    const allBlog = await Blog.find();
    console.log("All blogs fetched in production:", allBlog); // Log the data
    return {
      status: "success",
      message: "Blog fetched successfully",
      data: JSON.parse(JSON.stringify(allBlog)), // Ensure proper serialization
    };
  } catch (error) {
    console.error("Error in getAllBlog:", error);
    return {
      status: "error",
      message: "Blog fetching failed",
    };
  }
};


