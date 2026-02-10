import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { projects } from "@/data/projects";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Section
        id="projects"
        title="Projects"
        subtitle="A few things I’ve built recently."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section
        id="education"
        title="Education"
        subtitle="Foundations and academic excellence."
      >
        <div className="card p-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-primary font-medium">STI College Munoz-EDSA</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                2022 — 2025
              </p>
            </div>
            {/* <div className="bg-primary/5 dark:bg-primary/10 px-4 py-2 rounded-xl border border-primary/10">
              <span className="text-primary font-semibold"></span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              
            </p> */}
          </div>
        </div>
        <div className="card p-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                Bachelor of Science in Civil Engineering
              </h3>
              <p className="text-primary font-medium">Our Lady of Fatima University</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                2021 — 2022
              </p>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 px-4 py-2 rounded-xl border border-primary/10">
              <span className="text-primary font-semibold"></span>
            </div>
          </div>
          {/* <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              
            </p>
          </div> */}
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Technical toolkit.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "JavaScript",
                "HTML/CSS",
                "SQL",
                "Python",
                "C++",
              ].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Web & Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "NestJS",
                "Node.js",
                "Tailwind CSS",
                "Vite",
                "Remix",
              ].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Data & Engineering
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "PostgreSQL",
                "MySQL",
                "SQLite",
                "React Native",
                "TensorFlow",
                "PyTorch",
                "OpenCV",
                "Git",
              ].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="experience"
        title="Experience"
        subtitle="Freelance & academic work."
      >
        <div className="card p-6">
          <ul className="space-y-3 list-disc pl-6">
            <li>
              <strong>Freelance Software Developer (2023-2025)</strong> —
              focused on backend services and API development using NestJS +
              PostgreSQL. Built small-scale web utilities and integrated
              third-party APIs.
            </li>
            <li>
              <strong>Academic Projects</strong> — full‑stack projects with
              React/NestJS; mobile prototypes using React Native; basic ML
              experiments with TensorFlow/PyTorch for classification and
              computer vision.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        id="achievements"
        title="Achievements"
        subtitle="School and Outside School Competitions"
      >
        <div className="card p-6">
          <ul className="space-y-3 list-disc pl-6">
            <li>
              <strong>
                Top 10 Finalist - DOST-NCR Spark-A-Change Challenge (2025)
              </strong>{" "}
              — As a Top 10 Finalist in the DOST-NCR Spark-A-Change Challenge, I
              showcased innovative problem-solving skills, creativity, and the
              ability to design tech-driven solutions addressing real-world MSME
              challenges. My project was selected among numerous entries across
              Metro Manila, reflecting my dedication to applying computer
              engineering knowledge toward impactful and sustainable
              innovations.
            </li>
            <li>
              <strong>Participant – ICpEP NCR Robothon(2023-2024)</strong> — As
              a contestant in the ICpEP NCR Robothon, I represented my school in
              a highly competitive regional event. I collaborated on
              thesis-based robotics research and presented technical
              documentation that emphasized innovation and practical
              application. This experience allowed me to benchmark my skills
              against peers across the region, strengthening my expertise in
              academic research, technical communication, and engineering
              problem-solving.
            </li>
            <li>
              <strong>
                1st Place – ICpEP Robothon (School Level, 2023-2024)
              </strong>{" "}
              — As the champion of our school-level ICpEP Robothon, I showcased
              excellence in research-driven thesis writing and robotics
              innovation. I produced a well-structured technical paper
              highlighting feasible engineering solutions, demonstrating strong
              analytical skills, technical writing proficiency, and creativity
              in addressing real-world challenges.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Let’s build something together."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />{" "}
              <a
                href="mailto:kennethbarrameda03@gmail.com"
                className="underline"
              >
                kennethbarrameda03@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />{" "}
              <a href="tel:+639916417696" className="underline">
                +63 991 641 7696
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />{" "}
              <span>Nagkaisang Nayon, Quezon City</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5" />{" "}
              <a
                href="https://github.com/Kensh1nxenim"
                target="_blank"
                className="underline"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />{" "}
              <a
                href="https://www.linkedin.com/in/john-kenneth-barrameda-408425256"
                target="_blank"
                className="underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="md:col-span-2 card p-6">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
