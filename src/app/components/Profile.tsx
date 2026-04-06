"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Profile = () => {
  const profile = {
    name: "Jeremy Reinhart",
    role: "Fullstack Developer",
    location: "Cempaka Baru, Jakarta Pusat, Indonesia",
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-87.5 lg:h-87.5 group">
            <div className="absolute inset-0 rounded-[40px] bg-linear-to-tr from-green-400 via-blue-400 to-purple-400 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />

            <Image
              src="/image/profile.jpg"
              alt="profile"
              fill
              className={`
      object-cover
      rounded-[32px]
      shadow-2xl
      border border-white/40
      group-hover:scale-[1.03]
      transition duration-500
      relative
    `}
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, I&apos;m {profile.name} 👋
          </h1>

          <h4 className="text-xl text-gray-500 font-medium">{profile.role}</h4>

          <p className="text-justify">
            I&apos;m a full-stack developer focused on building scalable and
            efficient web applications using a variety of modern technologies,
            including React, Next, Node.js, and Express.js. I enjoy solving
            complex problems and continually improving my web development
            skills.
          </p>

          <p className="flex">
            <MapPin /> {profile.location}
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="sm"
              className="bg-green-500 hover:bg-green-700 cursor-pointer w-35 rounded-2xl"
            >
              <Link href="https://wa.me/6287771062510" target="_blank">
                Let&apos;s Talk
              </Link>
            </Button>

            <Button asChild size="sm" className="bg-black w-35 rounded-2xl">
              <Link
                href="https://drive.google.com/file/d/1px5GeX67JaRyJuZHjHBffCXLP_UClQ--/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
