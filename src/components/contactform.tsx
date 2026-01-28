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
    <section id="contact" className="min-h-screen flex flex-col justify-center bg-neo-bg px-4 py-20 border-b-4 border-black">
      <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-12 uppercase tracking-tight">
        <span className="bg-neo-green px-4 border-4 border-black shadow-neo transform rotate-2 inline-block">Contact Me</span>
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto bg-white border-4 border-black shadow-neo-lg p-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <label className="font-black text-black uppercase text-sm">Name</label>
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full border-4 ${errors.name ? "border-red-500 bg-red-50" : "border-black bg-gray-50"} p-4 font-bold text-black focus:outline-none focus:bg-neo-second focus:shadow-neo transition-all rounded-none placeholder:text-gray-400`}
          />
          {errors.name && <p className="text-red-600 font-bold text-sm mt-1 bg-red-100 inline-block px-2 border-2 border-red-600">{errors.name}</p>}
        </div>


        <div className="space-y-2">
          <label className="font-black text-black uppercase text-sm">Email</label>
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border-4 ${errors.email ? "border-red-500 bg-red-50" : "border-black bg-gray-50"} p-4 font-bold text-black focus:outline-none focus:bg-neo-second focus:shadow-neo transition-all rounded-none placeholder:text-gray-400`}
          />
          {errors.email && <p className="text-red-600 font-bold text-sm mt-1 bg-red-100 inline-block px-2 border-2 border-red-600">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="font-black text-black uppercase text-sm">Message</label>
          <textarea
            name="message"
            placeholder="YOUR MESSAGE..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className={`w-full border-4 ${errors.message ? "border-red-500 bg-red-50" : "border-black bg-gray-50"} p-4 font-bold text-black focus:outline-none focus:bg-neo-second focus:shadow-neo transition-all rounded-none placeholder:text-gray-400`}
          ></textarea>
          {errors.message && <p className="text-red-600 font-bold text-sm mt-1 bg-red-100 inline-block px-2 border-2 border-red-600">{errors.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center py-2 border-2 border-dashed border-gray-300 bg-gray-50">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-neo-main text-black font-black text-xl py-4 border-4 border-black shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </motion.form>

      {/* Ikon sosmed */}
      <div className="flex justify-center space-x-8 mt-16">
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
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-black bg-white p-4 border-4 border-black shadow-neo hover:bg-neo-second hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            <item.icon className="w-8 h-8" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
