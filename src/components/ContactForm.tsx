"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-black via-[#0e0e0e] to-black overflow-hidden"
    >
      {/* Ambient blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD580]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F61]/20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580] mb-4">
          Get Involved
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Whether you want to volunteer, partner with us, or simply ask a
          question — we’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#FFD580]">
            Become a Volunteer or Partner
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your time, skills, and compassion can transform lives. We work with
            individuals and organizations who believe every child deserves
            care, protection, and opportunity.
          </p>

          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <span className="text-[#FF6F61] text-xl">❤️</span>
              Support vulnerable children
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#FF6F61] text-xl">🤝</span>
              Partner with a transparent foundation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#FF6F61] text-xl">🌱</span>
              Make lasting social impact
            </li>
          </ul>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD580]"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD580]"
            />

            <textarea
              placeholder="Tell us how you'd like to help or what you'd like to know"
              required
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD580]"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#C68642] to-[#FF6F61] hover:opacity-90 transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-green-400 font-medium"
            >
              ✅ Thank you! We’ll get back to you shortly.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
