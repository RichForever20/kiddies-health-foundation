"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faAppleWhole,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function Programs() {
  const programs = [
    {
      title: "Healthcare",
      description:
        "Medical checkups, vaccinations, mental health support, and early intervention care for children.",
      icon: faHeartPulse,
    },
    {
      title: "Nutrition",
      description:
        "Daily meals, nutrition education, and food support programs to help children grow strong and healthy.",
      icon: faAppleWhole,
    },
    {
      title: "Education",
      description:
        "School supplies, tutoring, scholarships, and safe learning environments for every child.",
      icon: faGraduationCap,
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-black"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFD580]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6F61]/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580]">
            Our Programs
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            We deliver holistic programs designed to protect, nourish, and
            empower children for a healthier future.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.20,
    delay: idx * 0.08,
    ease: "easeOut"
  }}
  whileHover={{ y: -8, scale: 1.04 }}
  className="
    relative group
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-3xl
    p-10
    shadow-2xl
    transition-all
  "
>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD580]/20 to-[#FF6F61]/20 transition-opacity"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={program.icon}
                  className="text-[#FFD580] text-2xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
