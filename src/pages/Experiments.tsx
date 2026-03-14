import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface Experiment {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const experiments: Experiment[] = [
  {
    title: "Service Blueprint Generator",
    description: "A tool for mapping end-to-end service journeys with automated touchpoint analysis.",
    tech: ["Python", "React"],
    href: "https://github.com/anchitsom",
  },
  {
    title: "Behavioural Nudge Toolkit",
    description: "Open-source collection of behavioural design patterns for product teams.",
    tech: ["TypeScript", "Design Systems"],
    href: "https://github.com/anchitsom",
  },
  {
    title: "Research Synthesis Dashboard",
    description: "Lightweight dashboard for aggregating and visualising qualitative research insights.",
    tech: ["React", "D3"],
    href: "https://github.com/anchitsom",
  },
];

const Experiments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 md:py-28 px-6 lg:px-0">
        <div className="prose-editorial">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Experiments
              </h1>
              <a
                href="https://github.com/anchitsom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-[560px]">
              Side projects, prototypes, and open-source tools — things I build to explore ideas outside of work.
            </p>
          </motion.div>

          <div className="space-y-0">
            {experiments.map((exp, index) => (
              <motion.a
                key={exp.title}
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="group block py-6 border-b border-border first:border-t"
              >
                <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 flex items-center gap-2">
                  {exp.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                <div className="flex gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-sm bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiments;
