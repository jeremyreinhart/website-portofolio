"use client";

import Image from "next/image";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      job: "Software Developer Intern",
      company: "PT Rekayasa Industri",
      startDate: "Feb 2023",
      endDate: "Aug 2023",
      task: [
        "Worked with .NET Framework using VB.NET, MySQL, and HTML/CSS",
        "Assisted the team in building website UI",
        "Implemented CRUD features on the website",
        "Created data tables in SQL Server",
        "Performed testing and validation of developed features",
      ],
      image: "/image/rekind.jpg",
      technologies: ["Javascript", ".NET", "ASP.NET", "MySQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 py-16 scroll-mt-10"
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row gap-6 p-6 border rounded-xl shadow-sm hover:shadow-md duration-300 bg-white"
          >
            <div className="flex justify-center md:justify-start">
              <Image
                src={exp.image}
                alt={exp.company}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{exp.job}</h3>

              <p className="text-sm text-gray-500">
                {exp.company} • {exp.startDate} - {exp.endDate}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {exp.task.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-500">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-100 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
