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
    <section id="tech" className="py-16 bg-gray-50 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Tech Stack & Tools I Use Everyday
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {images.map((i) => (
            <div
              key={i.id}
              className="group flex flex-col items-center justify-between h-40 p-4  bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <Image
                src={i.img}
                alt={i.name}
                width={70}
                height={70}
                className="object-contain group-hover:scale-110 transition duration-300"
              />

              <span className="mt-4 text-sm font-medium text-gray-600 text-center min-h-5">
                {i.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
