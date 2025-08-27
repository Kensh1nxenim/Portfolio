"use client"; // if you are in Next.js App Router

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_5kywykf", // 👈 EmailJS Service ID
        "template_y89hdsi", // 👈 EmailJS Template ID
        formData,
        "73lYFpvRCevXcsOxw" // 👈 EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => setStatus("❌ Failed to send: " + err.text)
      );
  };

  return (
    <div className="card p-6">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          className="border rounded-xl px-4 py-3"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="border rounded-xl px-4 py-3"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="border rounded-xl px-4 py-3 min-h-[120px]"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary justify-center">
          Send Message
        </button>
      </form>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
