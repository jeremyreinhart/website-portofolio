"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      id: 1,
      school: "harisenin",
      degree: "Bootcamp Fullstack Developer",
      year: "2025 - 2025",
      description:
        "I graduated with a 97 and graduate predicate. Here, I learned full-stack web application development from the basics to creating personal projects. Courses covered Express JS,Node JS,React JS, PostgreSQL and MySQL.",
    },
    {
      id: 2,
      school: "Universitas Tarumanagara",
      degree: "S1 Teknik Informatika",
      year: "2020 - 2024",
      description:
        "I majored in Informatics Engineering. There, I learned programming in greater depth, including website programming, mobile programming, data analysis, and more. I also had internship experience as a software developer during college.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-black">Education</h2>

      <div className="flex flex-col gap-6 mt-10">
        {education.map((edu) => (
          <Card
            key={edu.id}
            className="hover:shadow-lg transition duration-300 border-muted"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle className="text-lg">{edu.school}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {edu.year}
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
