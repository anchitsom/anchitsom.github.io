import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArchiveProject {
  title: string;
  year: string;
  description: string;
  href: string;
}

const projects: ArchiveProject[] = [
  {
    title: "Freelancer Platform — Gig Economy Service Design",
    year: "2021",
    description: "Imagining a future of work for stakeholders in the gig economy through service and systems design.",
    href: "https://anchitsom.com/FreelancerPlatform.html",
  },
  {
    title: "Industrial Safety — Behavioural Design Interventions",
    year: "2020",
    description: "Design interventions to reduce accidents and safety incidents in a manufacturing plant.",
    href: "https://anchitsom.com/FactorySafety.html",
  },
  {
    title: "FoodByte IoT — Hardware Engineering for Sustainability",
    year: "2020",
    description: "Utilising hardware engineering and design to tackle the food wastage problem.",
    href: "https://anchitsom.com/foodbyte.html",
  },
  {
    title: "ResearchOps — Scaling a Design Research Team",
    year: "2019",
    description: "Developing internal processes that tackle challenges faced by a Design Research Team.",
    href: "https://anchitsom.com/ResearchOps.html",
  },
  {
    title: "AsiaMiles Dining — Loyalty Product Design",
    year: "2019",
    description: "Designing a dining product for Cathay Pacific's frequent flyer subsidiary.",
    href: "https://anchitsom.com/asiamiles.html",
  },
];

const PortfolioArchive = () => {
  return (
    <section id="archive" className="py-16 px-6 lg:px-0 border-t border-border">
      <div className="prose-editorial">
        <div className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-1">Portfolio Archive</h2>
          <p className="text-sm text-muted-foreground">Selected work, 2019–2021</p>
        </div>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group block py-5 border-b border-border last:border-b-0"
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h3>
                <span className="text-sm text-muted-foreground ml-4 shrink-0">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <Link
            to="/archive"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            View full archive with case study details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArchive;
