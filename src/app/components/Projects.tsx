"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Circle App",
      description: "Social media app with follow, like, and comment features.",
      highlight: "Fullstack App (React + Express + PostgreSQL)",
      image: "/image/circle.png",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/jeremyreinhart/circle-app-fe",
      live: "",
    },
    {
      id: 2,
      title: "Split Bill Calculator",
      description: "OCR-based app to split bills and share results easily.",
      highlight: "OCR + Share to WhatsApp/Telegram",
      image: "/image/split-bill.png",
      tech: ["Next.js", "Tailwind", "OCR"],
      github: "https://github.com/jeremyreinhart/split-bill-calculator",
      live: "https://split-bill-calculator-7ctk.vercel.app/",
    },
    {
      id: 3,
      title: "Phone Store",
      description: "E-commerce app with payment integration using Midtrans.",
      highlight: "Payment Gateway Integration",
      image: "/image/phonestore.png",
      tech: ["Next.js", "Tailwind", "Supabase"],
      github: "https://github.com/jeremyreinhart/phonestore",
      live: "https://phonestore-amber.vercel.app/",
    },
    {
      id: 4,
      title: "URL Shortener",
      description: "Shorten URLs with custom links and QR code generator.",
      highlight: "Go Backend + QR Code Feature",
      image: "/image/shortener.png",
      tech: ["React", "Tailwind", "Go"],
      github: "https://github.com/jeremyreinhart/url-shrotener-be",
      live: "https://url-shrotener-fe.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          A selection of projects showcasing my fullstack development skills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border border-white/20 bg-white/60 backdrop-blur-md shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute top-4 left-4 z-20">
                <span className="text-xs bg-black/70 text-white px-3 py-1 rounded-full">
                  {project.highlight}
                </span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    className="rounded-full px-3 text-black py-1 text-xs bg-gray-100 hover:bg-gray-200 transition"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hover:scale-105 transition"
              >
                <Link href={project.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>

              {project.live ? (
                <Button
                  asChild
                  size="sm"
                  className="hover:scale-105 transition"
                >
                  <Link href={project.live} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Link>
                </Button>
              ) : (
                <Button size="sm" disabled>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
