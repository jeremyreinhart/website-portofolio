"use client";

import Image from "next/image";

const images = [
  { id: 1, img: "/image/javascript.png", name: "JavaScript" },
  { id: 2, img: "/image/react.png", name: "React JS" },
  { id: 3, img: "/image/next.png", name: "Next JS" },
  { id: 4, img: "/image/node.png", name: "Node.js" },
  { id: 5, img: "/image/express.png", name: "Express" },
  { id: 6, img: "/image/typescript.png", name: "TypeScript" },
  { id: 7, img: "/image/tailwind.png", name: "Tailwind" },
  { id: 8, img: "/image/postgre.png", name: "PostgreSQL" },
  { id: 9, img: "/image/github.png", name: "Github" },
  { id: 10, img: "/image/postman.jpg", name: "Postman" },
];

export const Tech = () => {
  return (
    <section id="tech" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold mb-4">
          Tech Stack & Tools
        </h2>

        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Technologies I use to build scalable and modern web applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {images.map((i) => (
            <div
              key={i.id}
              className="group relative flex flex-col items-center justify-center h-36 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-green-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <Image
                src={i.img}
                alt={i.name}
                width={55}
                height={55}
                className="object-contain group-hover:scale-110 transition duration-300"
              />

              <span className="mt-3 text-xs font-medium text-gray-600 text-center">
                {i.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
