"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const formalEducation = [
    {
      id: 1,
      school: "Universitas Tarumanagara",
      degree: "S1 Teknik Informatika",
      year: "August 2020 - July 2024",
      description:
        "Studied Informatics Engineering with focus on software development, web programming, and system design. Gained hands-on experience through academic projects and internship as a Software Developer.",
    },
  ];

  const nonFormalEducation = [
    {
      id: 2,
      school: "Harisenin",
      degree: "Fullstack Web Developer Bootcamp",
      year: "March 2025 - August 2025",
      description:
        "Completed intensive fullstack bootcamp with final score 97. Built real-world projects using React, Express, Node.js, and PostgreSQL.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="text-gray-500 mt-3">
          My academic and professional learning journey
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Formal Education</h3>

        <div className="space-y-6">
          {formalEducation.map((edu) => (
            <Card
              key={edu.id}
              className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition duration-300"
            >
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-green-500" />
                  <div>
                    <CardTitle className="text-lg">{edu.school}</CardTitle>
                    <p className="text-sm text-gray-500">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Internal Education</h3>

        <div className="space-y-6">
          {nonFormalEducation.map((edu) => (
            <Card
              key={edu.id}
              className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition duration-300"
            >
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-green-500" />
                  <div>
                    <CardTitle className="text-lg">{edu.school}</CardTitle>
                    <p className="text-sm text-gray-500">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
