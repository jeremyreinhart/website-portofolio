"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-20">
        <Link href="/">
          <span className="hover:text-green-500 text-xl font-semibold">
            <Image src="/image/logo.png" alt="name" width={100} height={100} />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link className="hover:text-green-500 transition" href="#tech">
            Tech Stack
          </Link>
          <Link className="hover:text-green-500 transition" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-green-500 transition" href="#experience">
            Experience
          </Link>

          <Button
            asChild
            size="sm"
            className="bg-green-500 hover:bg-green-600 cursor-pointer rounded-2xl h-8 w-25"
          >
            <Link
              href="https://wa.me/6287771062510"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s Talk
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="bg-neutral-900 hover:bg-gray-800 rounded-2xl h-8 w-35"
          >
            <Link
              href="https://drive.google.com/file/d/1faov1U_tLoN8OdjiFHev-O_7c31XQBKD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Download CV
            </Link>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4 font-medium bg-white shadow">
          <Link href="#tech">Tech Stack</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>

          <Button
            asChild
            size="sm"
            className="bg-green-500 hover:bg-green-600 rounded-2xl"
          >
            <Link
              href="https://wa.me/6287771062510"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s Talk
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="bg-black hover:bg-gray-800 rounded-2xl"
          >
            <Link
              href="https://drive.google.com/file/d/1faov1U_tLoN8OdjiFHev-O_7c31XQBKD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 "
            >
              Download CV
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};
