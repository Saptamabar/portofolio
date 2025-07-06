"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Mail } from "lucide-react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const validate = () => {
    let tempErrors: typeof errors = {};
    if (formData.name.trim().length < 2) tempErrors.name = "Name must be at least 2 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format.";
    if (formData.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please verify the reCAPTCHA.");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          "g-recaptcha-response": captchaToken, 
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken(null);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20">
      <h2 className="text-3xl md:text-4xl text-gray-700 font-bold text-center mb-8">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto bg-white shadow rounded-xl p-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* input fields sama seperti sebelumnya */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded px-3 py-2 focus:outline-none focus:ring-2 text-gray-600 focus:ring-blue-500`}
      />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      

      {/* Lakukan hal yang sama untuk input email dan textarea message */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={4}
        className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      ></textarea>
     
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        {/* reCAPTCHA */}
        <div
        className="flex justify-center py-2"
        >
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Ikon sosmed */}
      <div className="flex justify-center space-x-6 mt-8 text-gray-600">
        {[
          { href: "https://www.linkedin.com/in/achmad-sapta/", icon: Linkedin },
          { href: "mailto:achmadsapta77@gmail.com", icon: Mail },
          { href: "https://github.com/Saptamabar", icon: Github },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-blue-500"
          >
            <item.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
