import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";

interface Book {
  title: string;
  author: string;
  status: "reading" | "finished";
  rating?: number;
  review?: string;
}

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

const Reading = () => {
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
                Reading
              </h1>
              <a
                href="https://www.goodreads.com/user/show/69598212-anchit-som"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                Goodreads <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-[560px]">
              Books that shape how I think about products, organisations, and the world. Short reviews and notes.
            </p>
          </motion.div>

          {/* Currently Reading */}
          {books.filter(b => b.status === "reading").map((book) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-12 p-6 border border-border rounded-lg bg-muted/30"
            >
              <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                <BookOpen className="w-4 h-4" /> Currently reading
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">{book.title}</h2>
              <p className="text-muted-foreground mt-1">{book.author}</p>
            </motion.div>
          ))}

          {/* Finished Books with Reviews */}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reading;
