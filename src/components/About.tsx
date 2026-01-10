"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faBookOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const countersRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const counters = [
    { label: "Children Supported", value: 1200 },
    { label: "Meals Served", value: 4500 },
    { label: "Volunteers", value: 300 },
  ];

  const timeline = [
    {
      title: "Our Humble Beginning",
      subtitle: "2012",
      description:
        "We began with a small group of dedicated volunteers committed to improving children’s health and wellbeing.",
      icon: faHeartPulse,
    },
    {
      title: "Expanding Our Reach",
      subtitle: "2015 – 2020",
      description:
        "Our programs expanded to include healthcare, nutrition, education, and community outreach across regions.",
      icon: faBookOpen,
    },
    {
      title: "Vision for the Future",
      subtitle: "2025 & Beyond",
      description:
        "We are scaling our impact to ensure every child has access to care, education, and a safe future.",
      icon: faStar,
    },
  ];

  useEffect(() => {
    countersRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: el.dataset.value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });

 
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-black"
    >
      {/* Ambient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-[#FFD580]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FF6F61]/20 rounded-full blur-3xl" />

      {/* Background Video */}
      {/* Background Image */}
<div
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/gallery2.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/65" />
</div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580]">
            About Us
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Building healthier futures for children through compassion,
            structure, and sustainable care.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {counters.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-10 text-center shadow-xl"
            >
              <p
ref={(el) => {
      if (el) countersRef.current[idx] = el;
    }}                data-value={item.value}
                className="text-4xl md:text-5xl font-bold text-[#FF6F61]"
              >
                0
              </p>
              <p className="mt-3 text-base md:text-lg text-gray-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-20">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-xl">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[#FFD580] text-2xl"
                />
              </div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 max-w-xl">
                <span className="text-[#FF6F61] font-semibold text-sm">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
