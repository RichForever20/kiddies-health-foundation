"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faRotate,
  faBuilding,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import DonateForm from "./DonateForm";

export default function Donate() {
  const [showForm, setShowForm] = useState(false);

  const donationOptions = [
    {
      title: "One-Time Gift",
      description:
        "Make an immediate impact with a single donation. Every contribution helps a child today.",
      icon: faHandHoldingHeart,
    },
    {
      title: "Monthly Support",
      description:
        "Become a sustaining partner and help us plan, grow, and reach more children every month.",
      icon: faRotate,
    },
    {
      title: "Corporate Partnership",
      description:
        "Partner with us to sponsor programs, projects, and long-term community impact.",
      icon: faBuilding,
    },
  ];

  return (
    <section
      id="donate"
      className="relative py-28 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-black"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FFD580]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF6F61]/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580]">
            Support Our Mission
          </h2>
          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
            Your generosity enables us to deliver healthcare, nutrition, and
            education to children who need it most.
          </p>
        </motion.div>

        {/* Donation Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {donationOptions.map((option, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => setShowForm(true)}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                relative group
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-3xl
                p-10
                text-center
                shadow-2xl
                cursor-pointer
              "
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD580]/20 to-[#FF6F61]/20 transition-opacity"></div>

              {/* Icon */}
              <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={option.icon}
                  className="text-[#FFD580] text-2xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <span
                  className="
                    inline-block
                    px-8 py-3
                    rounded-full
                    font-semibold
                    bg-gradient-to-r from-[#C68642] to-[#FF6F61]
                    text-white
                  "
                >
                  Donate Now
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Donate Form Reveal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="relative mt-24"
            >
              {/* Close button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute -top-10 right-0 text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>

              <DonateForm />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Line */}
        <p className="text-center text-gray-400 text-sm mt-14">
          Secure payments • Full transparency • Every gift changes a life
        </p>
      </div>
    </section>
  );
}
