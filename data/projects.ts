import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "todo-list",
    title: "To Do List",
    description:
      "A simple task management app built with React and Create React App. It allows users to add, update, and delete to-do items, styled with Font Awesome icons and tested with React Testing Library.",
    stack: ["CRA", "FontAwesome", "Testing Library", "React"],
    repo: "https://github.com/Kensh1nxenim/ToDoListReactJS",
  },
  {
    slug: "dictionary",
    title: "Dictionary",
    description:
      "A fullstack dictionary web app built with Remix, React, and TypeScript. It provides a responsive interface for searching words, styled with TailwindCSS, and powered by a Node.js runtime with server-side rendering and modern build tooling via Vite.",
    stack: ["React", "Remix", "Typescript", "Tailwind", "Node.js"],
    repo: "https://github.com/Kensh1nxenim/dictionary",
  },
  {
    slug: "better-todo-app",
    title: "Better To Do App",
    description:
      "A fullstack todo application with a modular architecture, featuring real-time synchronization and a clean, responsive UI. Built with Next.js, NestJS, and PostgreSQL.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    repo: "https://github.com/Kensh1nxenim/xenim-todo-app",
  },
];
