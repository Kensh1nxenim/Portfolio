import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="h1">
            Hi, I’m <span className="text-primary">John Kenneth Barrameda</span>
            .
          </h1>
          <p className="p">
            I’m a passionate computer engineering graduate with a strong
            foundation in programming, web development, and database management.
          </p>
          <p className="p">
            My journey has taken me from civil engineering into computer
            engineering, where I discovered my true passion for building
            technology solutions. With hands-on experience in web and mobile
            development, I specialize in using tools such as React, NestJS,
            PostgreSQL, and React Native to create clean and scalable
            applications. I also explore artificial intelligence and machine
            learning frameworks like TensorFlow and PyTorch to broaden my skill
            set and challenge myself with emerging technologies.
          </p>
          <p className="p">
            Whether working independently on freelance projects or collaborating
            within a team, I thrive on solving problems through code and
            continuously expanding my knowledge. My goal is to deliver impactful
            digital solutions while growing into a well-rounded full-stack
            developer.
          </p>
          <div className="flex items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" className="btn btn-ghost">
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
