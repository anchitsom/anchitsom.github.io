import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Essay {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  href: string;
}

const essays: Essay[] = [
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
  {
    title: "Loyalty Is a Product, Not a Programme",
    date: "Sep 2025",
    readingTime: "5 min read",
    summary: "Lessons from redesigning a dining product for AsiaMiles — and why loyalty deserves product thinking, not marketing thinking.",
    href: "https://anchitsom.substack.com",
  },
];

const WritingFeed = () => {
  return (
    <section id="writing" className="py-16 px-6 lg:px-0 border-t border-border">
      <div className="prose-editorial">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">Writing</h2>
          <a
            href="https://anchitsom.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
          >
            All on Substack <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="space-y-0">
          {essays.map((essay, index) => (
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
  );
};

export default WritingFeed;
