"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Profile = () => {
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
            Hi, I &apos;m Jeremy Reinhart 👋
          </h1>

          <h4 className="text-lg text-gray-500 font-medium">
            Full-Stack Developer
          </h4>

          <p className="text-justify">
            As a graduate of Informatics Engineering, I have an interest in
            software development, systems analysis, and programming. I have
            experience in developing web applications and have also participated
            in a Fullstack Web Developer bootcamp at Harisenin.com. I am used to
            working in a team, have good problem-solving skills, and always
            strive to continue learning and keeping up with the latest
            technological developments. With a strong interest in technological
            innovation, I am ready to contribute effectively in a dynamic and
            evolving work environment.
          </p>

          <p className="flex">
            <MapPin /> Cempaka Baru, Jakarta Pusat, Indonesia
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
                href="https://drive.google.com/file/d/1faov1U_tLoN8OdjiFHev-O_7c31XQBKD/view?usp=sharing"
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
