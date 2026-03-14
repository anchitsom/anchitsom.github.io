import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface Essay {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  href: string;
}

interface Experiment {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const recentEssays: Essay[] = [
  {
    title: "The Case for Systems Thinking in Product Leadership",
    date: "Mar 2026",
    readingTime: "8 min read",
    summary: "Why the best product leaders think in systems, not features — and how service design provides the lens to do it.",
    href: "https://anchitsom.substack.com",
  },
  {
    title: "Scaling Research Without Losing Rigour",
    date: "Jan 2026",
    readingTime: "10 min read",
    summary: "Building internal processes that empower research teams to move faster, make better decisions, and stay accountable.",
    href: "https://anchitsom.substack.com",
  },
  {
    title: "What Manufacturing Safety Taught Me About Product Risk",
    date: "Nov 2025",
    readingTime: "6 min read",
    summary: "How behavioural design interventions in a factory floor translate directly to managing risk in digital products.",
    href: "https://anchitsom.substack.com",
  },
];

const recentExperiments: Experiment[] = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 lg:px-0">
          <div className="prose-editorial">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15] max-w-[720px]"
            >
              Shaping products & organisations through strategy, systems thinking & design.
            </motion.h1>
          </div>
        </section>

        {/* Writing Section */}
        <section className="py-16 px-6 lg:px-0 border-t border-border">
          <div className="prose-editorial">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">Writing</h2>
              <Link
                to="/writing"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                All writing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-0">
              {recentEssays.map((essay, index) => (
                <motion.a
                  key={essay.title}
                  href={essay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group block py-6 border-b border-border last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.date}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.readingTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 flex items-center gap-2">
                    {essay.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {essay.summary}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Experiments Section */}
        <section className="py-16 px-6 lg:px-0 border-t border-border">
          <div className="prose-editorial">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">Experiments</h2>
              <Link
                to="/experiments"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                All experiments <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-0">
              {recentExperiments.map((exp, index) => (
                <motion.a
                  key={exp.title}
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group block py-6 border-b border-border last:border-b-0"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 flex items-center gap-2">
                    {exp.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </h3>
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
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 lg:px-0 border-t border-border">
          <div className="prose-editorial">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">About</h2>
              <div className="space-y-5 text-foreground/85 leading-[1.75]">
                <p>
                  Born and raised in Delhi, I find design to be a way of exploring a common yet diverse humanity. Solving user problems, creating systems, processes and experiences is a meaning-making activity — both for myself and the stakeholders of my practice.
                </p>
                <p>
                  With an undergraduate degree in{" "}
                  <a href="https://www.cs.hku.hk/" className="link-underline" target="_blank" rel="noopener noreferrer">Computer Science</a>{" "}
                  and{" "}
                  <a href="https://www4.fbe.hku.hk/ug/programmes/bba/edi-major" className="link-underline" target="_blank" rel="noopener noreferrer">Business Design Innovation</a>{" "}
                  from the University of Hong Kong, and a Masters in{" "}
                  <a href="https://www.rcaservicedesign.com/" className="link-underline" target="_blank" rel="noopener noreferrer">Service Design</a>{" "}
                  from the Royal College of Art, I work at the intersection of business, design and engineering.
                </p>
                <p>
                  My experience spans Design Research, Behavioural Design, Strategy Consulting, UX Design, Software Engineering and Product Management.
                </p>
              </div>

              {/* Currently */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Currently</h3>
                <p className="text-foreground/85 leading-relaxed">
                  Product Lead at a NHS England, building systems that help people get to the right care.
                </p>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/anchitsom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:anchit.som@gmail.com?subject=CV%20Request"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Request CV <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
