import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-20 flex items-center bg-[var(--bg-page)] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[var(--clr-primary-soft)]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--clr-accent)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-[var(--clr-white)] border border-[var(--clr-primary)]/10 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--clr-accent)] animate-pulse" />
            <span className="text-sm font-[var(--fw-medium)] text-[var(--clr-primary)] tracking-wide uppercase">
              Next Gen Water Tech
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-[var(--fw-bold)] text-[var(--clr-primary)] leading-[1.1] tracking-tight"
          >
            Pure Water, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--clr-secondary)] to-[var(--clr-accent)]">
              Pure Life.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed"
          >
            Experience the future of hydration with our advanced smart
            filtration systems. Sustainable, efficient, and designed for your
            health.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-[var(--gradient-brand)] text-white px-8 py-4 rounded-full font-[var(--fw-semibold)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-white text-[var(--clr-primary)] border border-[var(--clr-border)] px-8 py-4 rounded-full font-[var(--fw-medium)] hover:bg-[var(--clr-bg-muted)] hover:border-[var(--clr-accent)] transition-all duration-300 group"
            >
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </a>
          </motion.div>

          {/* Social Proof / Trusted By */}
          <motion.div
            variants={itemVariants}
            className="pt-8 flex items-center gap-8 text-[var(--text-secondary)] text-sm font-[var(--fw-medium)]"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                  style={{
                    backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <p>
              Trusted by{" "}
              <span className="text-[var(--clr-primary)] font-bold">
                10,000+
              </span>{" "}
              families
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          {/* Floating Circle / Product Placeholder */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]"
          >
            {/* Decorative Circles */}
            <div className="absolute inset-0 rounded-full border border-[var(--clr-accent)]/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[var(--clr-secondary)]/10 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Glassmorphism Card as Product Placeholder */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] flex items-center justify-center overflow-hidden">
              <div className="text-center p-6">
                <div className="w-24 h-48 mx-auto bg-gradient-to-b from-blue-100 to-blue-500/20 rounded-full blur-[2px] opacity-80" />
                <p className="mt-4 font-bold text-[var(--clr-primary)]">
                  Smart Purifier V1
                </p>
              </div>

              {/* Shine effect on card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-10 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-3"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Efficiency</p>
                <p className="text-sm font-bold text-gray-800">99.9% Pure</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-20 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Smart Mode</p>
                <p className="text-sm font-bold text-gray-800">Active</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
