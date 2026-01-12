"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplicationForm() {
  const [dob, setDob] = useState("");
  const [ageError, setAgeError] = useState("");

  const calculateAge = (date: string) => {
    const birth = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const handleDobChange = (value: string) => {
    setDob(value);
    const age = calculateAge(value);
    if (age < 0 || age > 6) {
      setAgeError("Only children between 0–6 years are eligible.");
    } else {
      setAgeError("");
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-black via-[#0e0e0e] to-black text-white">
      <div className="absolute inset-0 bg-[url('/images/gallery2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580]">
            Medical Assistance Application
          </h2>
          <p className="mt-4 text-gray-300">
            For children aged 0–6 years requiring urgent health support
          </p>
        </motion.div>

        {/* CHILD SECTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-[#FF6F61] mb-6">
            Child Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input className="input" placeholder="Child Full Name" />

            <select className="input">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              type="date"
              value={dob}
              onChange={(e) => handleDobChange(e.target.value)}
              className="input"
            />

            <input className="input" placeholder="Place of Birth" />
          </div>

          {ageError && (
            <p className="text-red-400 mt-3 text-sm">{ageError}</p>
          )}
        </div>

        {/* PARENT SECTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-[#FF6F61] mb-6">
            Parent / Guardian Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input className="input" placeholder="Parent Full Name" />
            <input className="input" placeholder="Relationship to Child" />
            <input className="input" placeholder="Phone Number" />
            <input className="input" placeholder="Email Address" />
            <input className="input" placeholder="Occupation" />

            <select className="input">
              <option>Monthly Income Range</option>
              <option>₦0 – ₦50,000</option>
              <option>₦50,001 – ₦100,000</option>
              <option>₦100,001 – ₦200,000</option>
              <option>Above ₦200,000</option>
            </select>
          </div>
        </div>

        {/* MEDICAL SECTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-[#FF6F61] mb-6">
            Medical Details
          </h3>

          <textarea
            className="input h-32"
            placeholder="Describe the child’s medical condition"
          />

          <input
            className="input mt-6"
            placeholder="Estimated Cost of Treatment (₦)"
          />
        </div>

        {/* DECLARATION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <label className="flex items-start gap-3 text-sm text-gray-300">
            <input type="checkbox" className="mt-1" />
            I confirm that all information provided is true and accurate.
          </label>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full py-4 rounded-2xl bg-[#FF6F61] text-black font-semibold"
          >
            Submit Application
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }
        .input:focus {
          outline: none;
          border-color: #ffd580;
        }
      `}</style>
    </section>
  );
}
