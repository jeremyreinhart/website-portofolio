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
      description:
        "Circle app is a clone application like X where users can follow other users and also like and comment on posts.",
      image: "/image/circle.png",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
      github: "https://github.com/jeremyreinhart/circle-app-fe",
      live: "",
    },
    {
      id: 2,
      title: "Split Bill Calculator",
      description:
        "Split Bill Calculator is an application for converting strokes containing names and prices into text using OCR. Split Bill also allows you to divide the bill by person or item and share it via WhatsApp or Telegram.",
      image: "/image/split-bill.png",
      tech: ["Next.js", "Tailwind", "OCR"],
      github: "https://github.com/jeremyreinhart/split-bill-calculator",
      live: "https://split-bill-calculator-7ctk.vercel.app/",
    },
    {
      id: 3,
      title: "Phone Store",
      description:
        "Phone Store is an application used to sell mobile phones where all stock and products are handled by the admin and users can choose the items they want to buy and it is also integrated with Midtrans for making payments.",
      image: "/image/phonestore.png",
      tech: ["Next.js", "Tailwind", "Supabase"],
      github: "https://github.com/jeremyreinhart/phonestore",
      live: "https://phonestore-amber.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4  scroll-mt-25">
      <div className="text-center mb-7">
        <h2 className="text-4xl font-bold tracking-tight">My Projects</h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Some of my recent work and contributions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="groupoverflow-hiddenborder border-white/20shadow-lg hover:shadow-2xl
        hover:-translate-y-2
        transition duration-500
        bg-white/70 backdrop-blur
      "
          >
            <div className="relative w-full h-72 bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6 group-hover:scale-105 transition duration-500"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-2xl font-semibold  transition">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <Badge key={index} className="rounded-full px-3 py-1 ">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-muted hover:scale-105 transition"
              >
                <Link href={project.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  Github
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
                    Live Demo
                  </Link>
                </Button>
              ) : (
                <Button size="sm" disabled>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
