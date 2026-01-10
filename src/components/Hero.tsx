"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-black">

      {/* Ambient Glows (same family as Contact) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFD580]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6F61]/20 rounded-full blur-3xl"></div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Building Healthier Futures for <br />
          <span className="text-[#FFD580]">Every Child</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Advancing children’s health, nutrition, and welfare through
          sustainable, community-driven programs.
        </p>

        {/* CTA Bar */}
        <div className="mt-10 max-w-2xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center overflow-hidden shadow-2xl">
          <input
            type="text"
            placeholder="Explore our programs & impact"
            className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/60 outline-none"
          />
          <button className="bg-gradient-to-r from-[#C68642] to-[#FF6F61] text-white px-8 py-4 font-semibold hover:opacity-90 transition">
            Explore
          </button>
        </div>

        <p className="mt-6 text-white/70 text-sm">
          Learn more about our mission and impact
        </p>
      </div>
    </section>
  );
}
