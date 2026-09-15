import { useState, useEffect } from "react";
import {
  Palette,
  Code2,
  PenTool,
  Sparkles,
  Smartphone,
  Braces,
  Mail,
  Link2,
  Globe,
  CheckCircle2,
} from "lucide-react";

import SectionWrapper from "./components/SectionWrapper";
import StatCard from "./components/StatCard";
import SkillBadge from "./components/SkillBadge";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

function App() {
  // Array of OBJECTS — passed down and mapped inside children components.
  const skills = [
    { name: "React", icon: Code2, featured: true },
    { name: "Tailwind CSS", icon: Palette, featured: true },
    { name: "Figma", icon: PenTool, featured: false },
    { name: "UI/UX Design", icon: Sparkles, featured: false },
    { name: "JavaScript", icon: Braces, featured: false },
    { name: "Responsive Design", icon: Smartphone, featured: false },
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Years of experience" },
    { value: 40, suffix: "+", label: "Projects shipped" },
    { value: 18, suffix: "", label: "Happy clients" },
  ];

  const projects = [
    {
      id: 1,
      title: "Bloom — Wellness App",
      description:
        "A mindfulness app redesign focused on gentle onboarding and daily check-ins.",
      tags: ["UI/UX", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Petal — E-commerce",
      description:
        "A boutique storefront with a calm, editorial feel and a fast, focused checkout.",
      tags: ["Web", "Branding"],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Loom — Analytics Dashboard",
      description:
        "A dashboard that turns dense usage data into a handful of clear decisions.",
      tags: ["Product", "Dashboard"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Local state lifted to the parent so it can be shared across children.
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // FUNCTION passed down to ProjectCard as the `onActionClick` prop.
  const handleProjectView = (id) => {
    setActiveProjectId(id);
  };

  // FUNCTION passed down to ContactForm as the `onSubmit` prop.
  const handleFormSubmit = (values) => {
    console.log("Message received from", values.name, values.email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* ---------------------------- NAV ---------------------------- */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="font-serif text-lg text-stone-900">Maya Ellison</span>
        <nav className="hidden gap-8 text-sm text-stone-500 sm:flex">
          <a href="#work" className="transition-colors hover:text-rose-700">Work</a>
          <a href="#skills" className="transition-colors hover:text-rose-700">Skills</a>
          <a href="#contact" className="transition-colors hover:text-rose-700">Contact</a>
        </nav>
      </header>

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-8 sm:flex-row">
        <div
          className={`flex-1 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <p className="text-sm font-medium text-rose-600">
            UI/UX Designer &amp; Frontend Developer
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            I design interfaces people enjoy coming back to.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-500">
            I'm Maya — I turn rough ideas into calm, considered products,
            working across research, visual design, and the React code
            that ships it.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-rose-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-800"
            >
              See my work
            </a>
            <div className="flex items-center gap-3 text-stone-400">
              <a href="#" aria-label="Github" className="transition-colors hover:text-rose-700"><Globe size={19} /></a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-rose-700"><Link2 size={19} /></a>
              <a href="#contact" aria-label="Email" className="transition-colors hover:text-rose-700"><Mail size={19} /></a>
            </div>
          </div>
        </div>

        <div
          className={`relative flex h-56 w-56 shrink-0 items-center justify-center transition-all duration-700 sm:h-72 sm:w-72 ${
            mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 via-pink-100 to-orange-100" />
          <div className="absolute inset-3 rounded-full border border-rose-300/60" />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
            alt="Portrait of Maya Ellison"
            className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* ---------------------------- STATS ---------------------------- */}
      <section className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-3 gap-6 border-y border-stone-200 py-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------- SKILLS ---------------------------- */}
      <div id="skills">
        <SectionWrapper
          title="What I work with"
          subtitle="The tools and practices behind most of my recent projects."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                skillName={skill.name}
                icon={skill.icon}
                featured={skill.featured}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* ---------------------------- PROJECTS ---------------------------- */}
      <div id="work" className="bg-rose-50/50">
        <SectionWrapper
          title="Selected work"
          subtitle="A few projects that show how I think through a problem end to end."
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onActionClick={handleProjectView}
                isActive={activeProjectId === project.id}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* ---------------------------- CONTACT ---------------------------- */}
      <div id="contact">
        <SectionWrapper
          title="Let's work together"
          subtitle="Have a project in mind? Tell me a little about it."
        >
          <div className="rounded-3xl border border-stone-200 bg-white p-8">
            {submitted ? (
              <div className="flex items-center gap-3 text-rose-700">
                <CheckCircle2 size={20} />
                <p className="text-sm font-medium">
                  Thanks — your message is on its way to me.
                </p>
              </div>
            ) : (
              <ContactForm onSubmit={handleFormSubmit} buttonText="Send message" />
            )}
          </div>
        </SectionWrapper>
      </div>

      {/* ---------------------------- FOOTER ---------------------------- */}
      <footer className="border-t border-stone-200 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Maya Ellison. All rights reserved.</p>
          <p>Designed and built with React &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;