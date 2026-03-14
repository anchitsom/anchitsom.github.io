import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";
import { useState } from "react";

interface Essay {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  href: string;
}

interface Note {
  title: string;
  date: string;
  type: "weeknote" | "monthnote";
  summary: string;
  href: string;
}

interface Book {
  title: string;
  author: string;
  status: "reading" | "finished";
  rating?: number;
  review?: string;
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

const books: Book[] = [
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    status: "reading",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    status: "finished",
    rating: 5,
    review: "The most honest book on leadership I've read. Less framework, more reality — exactly what product leaders need.",
  },
  {
    title: "Inspired",
    author: "Marty Cagan",
    status: "finished",
    rating: 4,
    review: "A strong foundation for understanding what good product teams look like. Essential for anyone transitioning into product leadership.",
  },
  {
    title: "An Elegant Puzzle",
    author: "Will Larson",
    status: "finished",
    rating: 5,
    review: "Systems thinking applied to engineering management. The chapters on organisational design are brilliant.",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    status: "finished",
    rating: 4,
    review: "Still the best primer on human-centred design. I return to it every year and find something new.",
  },
];

type Tab = "essays" | "reflections" | "reading";

const Writing = () => {
  const [activeTab, setActiveTab] = useState<Tab>("essays");

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "essays", label: "Essays", count: essays.length },
    { key: "reflections", label: "Reflections", count: notes.length },
    { key: "reading", label: "Reading", count: books.length },
  ];

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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[560px]">
              Essays on product leadership and systems thinking, weekly reflections, and books that shape how I work.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-1 mb-12 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs text-muted-foreground">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Essays Tab */}
          {activeTab === "essays" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-end mb-6">
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
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group block py-6 border-b border-border first:border-t"
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.date}</span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.readingTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 flex items-center gap-2">
                      {essay.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </h2>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {essay.summary}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reflections Tab */}
          {activeTab === "reflections" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-end mb-6">
                <a
                  href="https://anchitsom.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                >
                  All on Medium <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-muted-foreground mb-8">
                Weeknotes and monthnotes — short reflections on leadership, work, and the practice of building.
              </p>
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
            </motion.div>
          )}

          {/* Reading Tab */}
          {activeTab === "reading" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-end mb-6">
                <a
                  href="https://www.goodreads.com/user/show/69598212-anchit-som"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                >
                  Goodreads <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-muted-foreground mb-8">
                Books that shape how I think about products, organisations, and the world.
              </p>

              {/* Currently Reading */}
              {books.filter(b => b.status === "reading").map((book) => (
                <div
                  key={book.title}
                  className="mb-10 p-6 border border-border rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                    <BookOpen className="w-4 h-4" /> Currently reading
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">{book.title}</h2>
                  <p className="text-muted-foreground mt-1">{book.author}</p>
                </div>
              ))}

              {/* Finished Books */}
              <h2 className="font-display text-lg font-semibold text-foreground mb-6">Reviews</h2>
              <div className="space-y-0">
                {books.filter(b => b.status === "finished").map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="py-6 border-b border-border first:border-t"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-display text-lg font-medium text-foreground">{book.title}</h3>
                      {book.rating && (
                        <div className="flex items-center gap-0.5 ml-4 shrink-0">
                          {Array.from({ length: book.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                    {book.review && (
                      <p className="text-muted-foreground leading-relaxed">{book.review}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Writing;
