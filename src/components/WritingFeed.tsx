import { motion } from "framer-motion";

interface Essay {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  href?: string;
}

const essays: Essay[] = [
  {
    title: "Designing for the Gig Economy: A Service Perspective",
    date: "Mar 2026",
    readingTime: "8 min read",
    summary: "Exploring how service design can reimagine the future of work for freelancers, platforms, and the stakeholders caught in between.",
  },
  {
    title: "Why Safety Incidents Are a Design Problem",
    date: "Jan 2026",
    readingTime: "6 min read",
    summary: "How behavioural design interventions reduced accidents in a manufacturing plant — and what product leaders can learn from it.",
  },
  {
    title: "The ResearchOps Playbook: Scaling Design Research",
    date: "Nov 2025",
    readingTime: "10 min read",
    summary: "Building internal processes that empower research teams to move faster without sacrificing rigour.",
  },
  {
    title: "From IoT to Table: Tackling Food Waste with Hardware",
    date: "Sep 2025",
    readingTime: "7 min read",
    summary: "What happens when you combine hardware engineering with human-centred design to solve a systemic sustainability problem.",
  },
  {
    title: "Product Thinking in Loyalty Programs",
    date: "Jul 2025",
    readingTime: "5 min read",
    summary: "Lessons from designing a dining product for Cathay Pacific's AsiaMiles — and how loyalty programs can be more than points.",
  },
];

const WritingFeed = () => {
  return (
    <section id="writing" className="py-16 px-6 lg:px-0 border-t border-border">
      <div className="prose-editorial">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-12">Writing</h2>
        <div className="space-y-0">
          {essays.map((essay, index) => (
            <motion.article
              key={essay.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group py-6 border-b border-border last:border-b-0 cursor-pointer"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.date}</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{essay.readingTime}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                {essay.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-2">
                {essay.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingFeed;
