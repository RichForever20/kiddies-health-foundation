"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactGallery() {
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    galleryRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6, // 🔥 faster
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="impact"
      className="relative py-28 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-black"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFD580]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF6F61]/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FFD580]">
            Our Impact
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Real moments. Real lives. See how your support is transforming
            children and communities.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
ref={(el) => {
      if (el) galleryRefs.current[i] = el;
    }}              className="
                group relative
                h-64 md:h-72
                overflow-hidden
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                shadow-2xl
              "
            >
              {/* Image */}
              <img
                src={`/images/gallery${i}.jpg`}
                alt={`Impact ${i}`}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end
                "
              >
                <div className="p-5">
                  <p className="text-white font-semibold text-lg">
                    Impact Story {i}
                  </p>
                  <p className="text-white/70 text-sm">
                    Bringing hope, care, and opportunity
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-gray-400 text-sm mt-16">
          Transparency • Real stories • Measurable impact
        </p>
      </div>
    </section>
  );
}
