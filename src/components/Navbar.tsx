"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }} // start above screen
      animate={{ y: 0, opacity: 1 }} // slide down
      transition={{ duration: 0, ease: "easeIn" }}
      className={`w-full flex items-center justify-between px-10 py-6 fixed top-0 left-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-4xl font-semibold tracking-wide text-cyan-400">
        <Link href={"/"}>
          <span className="text-purple-400">AB</span>
        </Link>
      </h1>

      {/* Center Links */}
      <div className="flex gap-12 text-gray-300 text-xl font-medium">
        <a
          href="#home"
          className="hover:text-purple-400 transition duration-300"
        >
          {"// home"}
        </a>

        <a
          href="#tech-stack"
          className="hover:text-purple-400 transition duration-300"
        >
          {"// tech stack"}
        </a>

        <a
          href="#projects"
          className="hover:text-purple-400 transition duration-300"
        >
          {"// projects"}
        </a>

        <a
          href="#contact"
          className="hover:text-purple-400 transition duration-300"
        >
          {"// contact"}
        </a>
      </div>

      {/* Empty div for symmetry */}
      <div className="w-12" />
    </motion.nav>
  );
};

export default Navbar;
