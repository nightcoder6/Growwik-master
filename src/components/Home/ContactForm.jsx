"use client";
import { useForm } from "react-hook-form";
import { setContact } from "@/actions/contact";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    try {
      const { status, message } = await setContact(data);

      if (status === "success") {
        reset(); // Reset the form only on successful submission
        router.push("/thank-you");
      } else {
        console.error(message || "Submission failed");
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false regardless of success or failure
    }
  }

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-12">
          Let&apos;s Have Chat
        </h1>

        <div className="bg-[#323232]/20 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  YOUR NAME :
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors text-lg"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Company Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  COMPANY NAME :
                </label>
                <input
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors text-lg"
                  placeholder="XYZ pvt ltd."
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  EMAIL ADDRESS:
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors text-lg"
                  placeholder="xyz@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Contact Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  CONTACT DETAILS
                </label>
                <input
                  {...register("contact", {
                    required: "Contact details are required",
                    pattern: {
                      value: /^\+?[\d\s-]{10,}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  type="tel"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors text-lg"
                  placeholder="+1 123-456-7890"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-white text-xl font-semibold block">
                YOUR MESSAGE:
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors resize-none h-24 text-lg"
                placeholder="Write your message here"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-black"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
