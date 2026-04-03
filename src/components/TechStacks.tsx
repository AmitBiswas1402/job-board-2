"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AwardCard } from "@/components/Cards";

type TechItem = {
  name: string;
  icon: string;
  iconSize?: number;
};

const techItems: TechItem[] = [
  { name: "HTML5", icon: "html5.svg" },
  { name: "CSS3", icon: "css.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "ReactJS", icon: "react.svg" },
  { name: "NextJS", icon: "nextjs.svg" },
  { name: "TailwindCSS", icon: "tailwindcss.svg" },
  { name: "NodeJS", icon: "nodejs.svg" },
  { name: "ExpressJS", icon: "expressjs.svg" },
  { name: "Drizzle ORM", icon: "drizzle-orm.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "NeonDB", icon: "neon.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "MongoDB", icon: "mongodb.svg", iconSize: 13 },
  { name: "ClerkJS", icon: "clerk.svg" },
  { name: "ShadCN", icon: "shadcn.svg" },
  { name: "Zustand", icon: "zustand.svg" },
  { name: "Postman", icon: "postman.svg" },
  { name: "GitHub", icon: "github.svg" },
  { name: "Redis", icon: "redis.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Vercel", icon: "vercel.svg", iconSize: 24 },
  { name: "C Language", icon: "c.svg", iconSize: 22 },
  { name: "Java", icon: "java.svg", iconSize: 18 },
  { name: "Python", icon: "python.svg", iconSize: 22 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const TechStacks = () => {
  return (
    <section id="tech-stack" className="w-full min-h-screen scroll-mt-24 px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-white md:text-5xl">
          Technologies, Tools and Frameworks
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {techItems.map((item) => (
            <motion.div key={item.name} variants={cardVariants}>
              <AwardCard
                description={item.name}
                icon={
                  <Image
                    src={`/logos/${item.icon}`}
                    alt={item.name}
                    width={item.iconSize ?? 28}
                    height={item.iconSize ?? 28}
                    className="object-contain"
                  />
                }
                className="w-full border-white/20 bg-white/5 text-white backdrop-blur-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStacks;