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
        id="skills"
        title="Skills"
        subtitle="Tools and technologies I use."
      >
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "React Native (Expo)",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
          ].map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
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
              <strong>Freelance Software Developer (2024-2025)</strong> —
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
        subtitle="School and Outside School Competetions"
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
              <strong>Participant – ICpEP NCR Robotho(2023-2024)</strong> — As a
              contestant in the ICpEP NCR Robothon, I represented my school in a
              highly competitive regional event. I collaborated on thesis-based
              robotics research and presented technical documentation that
              emphasized innovation and practical application. This experience
              allowed me to benchmark my skills against peers across the region,
              strengthening my expertise in academic research, technical
              communication, and engineering problem-solving.
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
