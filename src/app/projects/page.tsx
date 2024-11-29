import React from "react";
import { ProjectCard } from "../components/ProjectCard"

const projects = [
  {
    id: 1,
    title: "SpeakSphere",
    description: "A language learning mobile app built with React Native (Graduation Project)",
    imageUrl: "/SpeakSphere-filled.jpg?height=200&width=400",
    tags: ["React Native", "Java (Spring Boot)", "PostgreSQL"],
    githubUrl: "https://github.com/SpeakSphere"
  },
  {
    id: 2,
    title: "Secrets App",
    description: "A web app for sharing secrets anonymously built with Node.js and MongoDB",
    imageUrl: "/secrets.png?height=200&width=400",
    tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    githubUrl: "https://github.com/atayiilmaz/Secrets-app"
  },
  {
    id: 3,
    title: "Technews",
    description: "A news aggregator app built with PHP and MySQL. Built a RestAPI from scratch",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["PHP", "MySQL", "RestAPI", "Bootstrap"],
    githubUrl: "https://github.com/atayiilmaz/technews"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills",
    imageUrl: "/portfolio.png?height=200&width=400",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://atayiilmaz.github.io/",
    githubUrl: "https://github.com/atayiilmaz/atayiilmaz.github.io"
  }
]


export default function Projects() {

    return (
        <div className="min-h-screen px-6 sm:px-12 md:px-20 pt-20">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Projects</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}