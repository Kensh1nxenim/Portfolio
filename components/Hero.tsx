import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="h1">
              Hi, I’m <span className="text-primary">John Kenneth Barrameda</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
              Computer Engineer
            </p>
          </div>
          <p className="p">
            A dedicated Computer Engineering graduate with a focus on building
            robust full-stack applications and exploring the intersection of
            software and intelligent systems.
          </p>
          <p className="p">
            I specialize in developing scalable web and mobile solutions using
            <strong> React, Next.js, NestJS, and PostgreSQL</strong>. Beyond
            application development, I have a deep interest in AI/ML frameworks
            such as <strong>TensorFlow and PyTorch</strong>, applying computer
            vision and classification models to solve complex engineering
            challenges.
          </p>
          <p className="p italic text-sm border-l-2 border-primary/20 pl-4 py-1">
            Transitioned from Civil Engineering to Computer Engineering, driven
            by a passion for logic, automation, and digital innovation.
          </p>
          <div className="flex items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="card p-3">
            <Image
              src="/me.jpg"
              alt="Workspace"
              width={960}
              height={720}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
