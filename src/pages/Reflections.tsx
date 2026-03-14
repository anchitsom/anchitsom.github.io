import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Note {
  title: string;
  date: string;
  type: "weeknote" | "monthnote";
  summary: string;
  href: string;
}

const notes: Note[] = [
  {
    title: "March 2026: On Patience in Product Leadership",
    date: "Mar 2026",
    type: "monthnote",
    summary: "Why the hardest skill in senior product roles isn't strategy — it's knowing when to wait.",
    href: "https://anchitsom.medium.com/",
  },
  {
    title: "Week 10: Building Conviction Without Data",
    date: "Mar 2026",
    type: "weeknote",
    summary: "Not every decision can be A/B tested. Reflections on intuition, experience, and the courage to ship.",
    href: "https://anchitsom.medium.com/",
  },
  {
    title: "February 2026: The Org as a Product",
    date: "Feb 2026",
    type: "monthnote",
    summary: "How I've started applying product thinking to team structure, rituals, and internal tooling.",
    href: "https://anchitsom.medium.com/",
  },
  {
    title: "Week 6: On Writing as a Leadership Tool",
    date: "Feb 2026",
    type: "weeknote",
    summary: "Writing weekly notes has changed how I think, communicate, and make decisions. Here's how.",
    href: "https://anchitsom.medium.com/",
  },
  {
    title: "January 2026: First Principles for a New Year",
    date: "Jan 2026",
    type: "monthnote",
    summary: "Annual review and the three questions I'm carrying into the year ahead.",
    href: "https://anchitsom.medium.com/",
  },
];

const Reflections = () => {
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
                Reflections
              </h1>
              <a
                href="https://anchitsom.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                All on Medium <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-[560px]">
              Weeknotes and monthnotes — short reflections on leadership, work, and the practice of building.
            </p>
          </motion.div>

          <div className="space-y-0">
            {notes.map((note, index) => (
              <motion.a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group block py-6 border-b border-border first:border-t"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm text-muted-foreground">{note.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-sm bg-muted text-muted-foreground capitalize">{note.type}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 flex items-center gap-2">
                  {note.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h2>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">{note.summary}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reflections;
