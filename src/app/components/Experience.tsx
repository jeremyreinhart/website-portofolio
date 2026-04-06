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
      highlights: [
        "Contributed to the development of internal web-based systems (ISC-Pro) used to support construction project workflows.",
        "Worked with .NET Framework, and the languages used are VB.NET, SQL, and of course HTML/CSS, ensured system stability and usability.",
        "Implemented CRUD functionalities and database structures, improved data management and accessibility for internal users.",
        "Performed testing and debugging to identify and resolve issues, ensured the reliability of deployed features.",
        "Perform system testing and validation on developed features to ensure their functionality meets project requirements.",
      ],
      image: "/image/rekind.jpg",
      technologies: ["VB.NET", "ASP.NET", "MySQL", "HTML/CSS"],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 py-20 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-gray-500 mt-3">
          My professional journey and contributions
        </p>
      </div>

      <div className="relative border-l-2 border-gray-200 pl-6 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <div>
                  <h3 className="font-semibold text-lg">{exp.job}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.company} • {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {exp.highlights.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-500 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-100 rounded-full border hover:bg-gray-200 transition"
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
