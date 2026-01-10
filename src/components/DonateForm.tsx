"use client";
declare global {
  interface Window {
    PaystackPop?: any; // Optional because it might not be loaded yet
  }
}

import { useState } from "react";
import { motion } from "framer-motion";

export default function DonateForm() {
  const [amount, setAmount] = useState(5000);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const presetAmounts = [5000, 10000, 20000, 50000];

  const payWithPaystack = () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    if (!amount || amount < 1000) {
      alert("Minimum donation is ₦1,000");
      return;
    }

    if (!window.PaystackPop) {
      alert("Payment service not loaded. Please refresh.");
      return;
    }

    setLoading(true);

    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
      email,
      amount: amount * 100,
      currency: "NGN",
      ref: "KHF-" + Date.now(),
      callback: async function (response: any) {
        try {
          const verify = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: response.reference }),
          });

          const data = await verify.json();

          if (data.success) {
            alert("Thank you 💛 Your donation was successful.");
          } else {
            alert("Payment received but verification failed.");
          }
        } catch (error) {
          alert("An error occurred during verification.");
        } finally {
          setLoading(false);
        }
      },
      onClose: function () {
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  return (
    <section
      id="donate-form"
      className="relative py-28 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD580]/20 via-[#FF6F61]/20 to-[#C68642]/20 blur-3xl"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/15 backdrop-blur-2xl
            border border-white/30
            rounded-3xl
            p-10
            shadow-2xl
          "
        >
          <h3 className="text-3xl font-bold text-center mb-3 text-[#FFD580]">
            Support Our Mission
          </h3>

          <p className="text-center text-white/80 mb-8">
            Every contribution helps improve children’s health, education, and
            wellbeing.
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full mb-6 px-5 py-4 rounded-xl
              bg-white/20 text-white
              placeholder-white/60
              border border-white/30
              focus:outline-none focus:ring-2 focus:ring-[#FFD580]
            "
          />

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`
                  py-3 rounded-xl font-semibold transition
                  border border-white/30
                  ${
                    amount === amt
                      ? "bg-[#FFD580] text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            min={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="
              w-full mb-6 px-5 py-4 rounded-xl
              bg-white/20 text-white
              border border-white/30
              focus:outline-none focus:ring-2 focus:ring-[#FFD580]
            "
          />

          {/* Submit */}
          <button
            disabled={loading}
            onClick={payWithPaystack}
            className={`
              w-full py-4 rounded-full
              font-bold text-lg transition
              ${
                loading
                  ? "bg-gray-400 text-black cursor-not-allowed"
                  : "bg-[#FFD580] text-black hover:bg-white"
              }
            `}
          >
            {loading ? "Processing…" : `Donate ₦${amount.toLocaleString()}`}
          </button>

          <p className="text-center text-sm text-white/60 mt-6">
            Secure payment powered by Paystack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
