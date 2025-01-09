"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUploadProgress from "@/utilities/Progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase"; // Import your Firebase config here
import { postBlog } from "@/actions/blog";
import { Toast } from "@/utilities/Toast";
import { redirect } from "next/navigation";

function Blogpost() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);
  const [filePrec, setFilePrec] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null); // Store the uploaded image URL
  const lastUpdate = useRef(0);
  const [toast, setToast] = useState({
    message: "",
    type: "success",
    show: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (!imageURL) {
        setToast({
          message: "Please wait until the image upload is complete.",
          type: "error",
          show: true,
        });
        return;
      }
      const finalData = { ...data, image: imageURL };
      const { status, message } = await postBlog(finalData);
      if (status === "success") {
        reset();
        setToast({ message, type: "success", show: true });
        router.push("/blogs");
      } else {
        setToast({
          message: message || "Post failed",
          type: "error",
          show: true,
        });
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
      setToast({
        message: "An unexpected error occurred.",
        type: "error",
        show: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImgLoading(true);

    // Set up the preview
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Initialize Firebase upload
    const storage = getStorage(app);
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        const now = Date.now();
        if (now - lastUpdate.current > 50) {
          setFilePrec(Math.floor(progress));
          lastUpdate.current = now;
        }
      },
      (error) => {
        console.error("Upload failed:", error);
        setImgLoading(false);
        setToast({
          message: "Error uploading image. Please try again.",
          type: "error",
          show: true,
        });
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setImageURL(downloadUrl); // Set the uploaded image URL
          setImgLoading(false);
          setToast({
            message: "Image uploaded successfully!",
            type: "success",
            show: true,
          });
        } catch (err) {
          console.error("Error getting download URL:", err);
          setImgLoading(false);
          setToast({
            message: "Error uploading image. Please try again.",
            type: "error",
            show: true,
          });
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-black/90 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="px-6 py-8">
            <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Create a New Blog Post
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Label
                  htmlFor="title"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Blog Title
                </Label>
                <Input
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  placeholder="Enter your blog title"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </motion.div>

              {/* Description Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label
                  htmlFor="description"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  rows={4}
                  placeholder="Describe your blog post"
                />
                {errors.description && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </motion.div>

              {/* link upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label
                  htmlFor="link"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Blog Link
                </Label>
                <Input
                  id="link"
                  type="url"
                  {...register("link", { required: "Link is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  placeholder="https://yourblog.com/post"
                />
                {errors.link && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.link.message}
                  </p>
                )}
              </motion.div>

              {/* Image Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white/5 border-2 border-white/10 border-dashed rounded-md appearance-none cursor-pointer hover:border-yellow-500 focus:outline-none"
                >
                  <span className="flex items-center space-x-2">
                    <Upload className="w-6 h-6 text-yellow-300" />
                    <span className="font-medium text-white">
                      Click to upload image
                    </span>
                  </span>
                  <span className="mt-2 text-sm text-yellow-200">
                    Maximum upload size: 4MB
                  </span>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </Label>
                {imagePreview && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 w-full"
                  >
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={400}
                      height={200}
                      className="max-w-full h-auto rounded-md shadow-lg"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`${imgLoading ? "" : "hidden"}`}
              >
                <FileUploadProgress filePrec={filePrec} />
              </motion.div>

              {/* Submit Button */}
              <CardFooter className="px-6 py-8">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                  disabled={imgLoading || loading} // Disable while uploading
                >
                  {imgLoading || loading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                  ) : (
                    "Create Post"
                  )}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />
      )}
    </div>
  );
}

export default Blogpost;
