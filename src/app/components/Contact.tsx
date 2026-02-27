"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-20 flex flex-col items-center text-center px-4 scroll-mt-24"
    >
      {/* heading tetap */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Let&apos;s create something impactful together
      </h2>

      <p className="text-gray-500 mt-4 max-w-2xl">
        I&apos;m open to opportunities, collaborations, and meaningful
        conversations
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10 mb-32 w-full max-w-5xl">
        <Link
          href="mailto:jeremyreinhart5@gmail.com"
          className="group flex items-center gap-5 p-6 rounded-3xl
          bg-white border border-gray-200 shadow-sm
          hover:shadow-lg hover:border-red-300 transition"
        >
          <div className="p-4 rounded-2xl bg-gray-100 group-hover:bg-red-100 transition">
            <Mail className="w-7 h-7 text-red-500" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-500 text-sm">jeremyreinhart5@gmail.com</p>
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/jeremyreinhart/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-6 rounded-3xl
          bg-white border border-gray-200 shadow-sm
          hover:shadow-lg hover:border-blue-300 transition"
        >
          <div className="p-4 rounded-2xl bg-gray-100 group-hover:bg-blue-100 transition">
            <Linkedin className="w-7 h-7 text-blue-500" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-500 text-sm">LinkedIn Profile</p>
          </div>
        </Link>

        <Link
          href="https://github.com/jeremyreinhart"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-6 rounded-3xl
          bg-white border border-gray-200 shadow-sm
          hover:shadow-lg hover:border-gray-400 transition"
        >
          <div className="p-4 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition">
            <Github className="w-7 h-7 text-gray-800" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-500 text-sm">GitHub Profile</p>
          </div>
        </Link>

        <Link
          href="https://www.instagram.com/jeremyreinhart.p/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-6 rounded-3xl
          bg-white border border-gray-200 shadow-sm
          hover:shadow-lg hover:border-pink-400 transition"
        >
          <div className="p-4 rounded-2xl bg-gray-100 group-hover:bg-pink-200 transition">
            <Instagram className="w-7 h-7 text-pink-500" />
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-gray-500 text-sm">Instagram Profile</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
