import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Calendar, Award } from "lucide-react";

interface Experiment {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

interface ArchiveProject {
  title: string;
  subtitle: string;
  year: string;
  duration?: string;
  role: string;
  category: string;
  challenge: string;
  description: string;
  keyOutcomes?: string[];
  methods?: string[];
  href?: string;
}

const experiments: Experiment[] = [
  {
    title: "Service Blueprint Generator",
    description: "A tool for mapping end-to-end service journeys with automated touchpoint analysis. Built to help teams visualise complex service ecosystems and identify gaps in customer experience.",
    tech: ["Python", "React", "D3.js"],
    href: "https://github.com/anchitsom",
  },
  {
    title: "Behavioural Nudge Toolkit",
    description: "Open-source collection of behavioural design patterns for product teams. Includes research-backed interventions for onboarding, retention, and habit formation.",
    tech: ["TypeScript", "Design Systems", "Figma"],
    href: "https://github.com/anchitsom",
  },
  {
    title: "Research Synthesis Dashboard",
    description: "Lightweight dashboard for aggregating and visualising qualitative research insights. Helps research teams identify patterns across studies and share findings with stakeholders.",
    tech: ["React", "D3", "Notion API"],
    href: "https://github.com/anchitsom",
  },
];

const archiveProjects: ArchiveProject[] = [
  {
    title: "Freelancer Platform",
    subtitle: "Gig Economy Service Design",
    year: "2021",
    duration: "3 months",
    role: "Research, Service Definition, Project Management",
    category: "Service Design",
    challenge: "Create a service that imagines a new future of work for stakeholders in the Gig Economy.",
    description: "A multidisciplinary student project at the Royal College of Art exploring how to build trust and credibility in the gig economy. We developed 'Rely' — a web platform measuring both employers and freelancers against four core values: Integrity, Communication, Punctuality, and Professionalism.",
    keyOutcomes: [
      "Points-based credibility system",
      "Mentor-mediated support system",
      "Career progression pathway",
      "High grades and positive jury feedback"
    ],
    methods: ["User Interviews", "Cross-cultural research", "Storyboards", "User testing"],
    href: "https://anchitsom.com/FreelancerPlatform.html",
  },
  {
    title: "Industrial Safety",
    subtitle: "Behavioural Design Interventions",
    year: "2020",
    duration: "12 months",
    role: "Design Researcher",
    category: "Process Design",
    challenge: "Design interventions to reduce accidents and safety incidents in a manufacturing plant.",
    description: "A year-long behavior change initiative for a major manufacturing facility. The project shifted from punitive to positive reinforcement approaches, using nudging and social proof to drive lasting cultural change.",
    keyOutcomes: [
      "34% reduction in unsafe behavior",
      "Badge Honor System implemented",
      "Accountability System with transparency",
      "Cultural shift to positive reinforcement"
    ],
    methods: ["Ethnography", "Field observation", "User interviews", "Group discussions"],
    href: "https://anchitsom.com/FactorySafety.html",
  },
  {
    title: "FoodByte IoT",
    subtitle: "Hardware Engineering for Sustainability",
    year: "2018",
    duration: "2 weeks",
    role: "UX Design & Android Development",
    category: "Service Design",
    challenge: "Design an IoT solution to tackle food wastage using hardware engineering and design.",
    description: "Part of MEMSI (MIT Entrepreneurship and Maker Skills Integrator) — developed a smart tracking system using IoT tags combined with a mobile app to help users track food items and reduce waste.",
    keyOutcomes: [
      "Smart tag solution",
      "Mobile app with tracking",
      "Gamification with badges",
      "Won jury award at final showcase"
    ],
    methods: ["User interviews", "Market research", "Fridge studies", "Card sorting"],
    href: "https://anchitsom.com/foodbyte.html",
  },
  {
    title: "ResearchOps",
    subtitle: "Scaling a Design Research Team",
    year: "2019",
    duration: "2.5 months",
    role: "Design Researcher",
    category: "Process Design",
    challenge: "Develop new internal processes to tackle challenges faced by a Design Research Team.",
    description: "An internal initiative to restructure how a Design Research team operates by identifying frustration points and developing new practices.",
    keyOutcomes: [
      "Two key personas identified",
      "Platform adoption recommendations",
      "Process automation",
      "Successful platform transition"
    ],
    methods: ["Ethnographic immersion", "Secondary research", "Interviews", "Card sorting"],
    href: "https://anchitsom.com/ResearchOps.html",
  },
  {
    title: "AsiaMiles Dining",
    subtitle: "Loyalty Product Design",
    year: "2019",
    duration: "3 months",
    role: "Individual Project — End-to-end Design",
    category: "UX Design",
    challenge: "Design a dining product for Cathay Pacific's frequent flyer subsidiary — AsiaMiles.",
    description: "A loyalty-based dining product that enables customers to tag and review dining experiences, creating a digitally searchable restaurant identity while earning loyalty miles.",
    keyOutcomes: [
      "Tag-based restaurant discovery",
      "Miles earned through reviews",
      "Qualitative insights for restaurants",
      "Lifestyle integration for AsiaMiles"
    ],
    methods: ["Contextual interviews", "Visual ethnography", "Review analysis", "Journey mapping"],
    href: "https://anchitsom.com/asiamiles.html",
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

          {/* Current Experiments - Main Section */}
          <section className="mb-24">
            <h2 className="font-display text-xl font-semibold text-foreground mb-8">Current</h2>
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
                  className="group block py-8 border-b border-border first:border-t"
                >
                  <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-3 flex items-center gap-2">
                    {exp.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{exp.description}</p>
                  <div className="flex gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-sm bg-muted text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Archive Section */}
          <section>
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">Archive</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Selected work from 2018–2021 at HKU & RCA
              </p>
            </div>
            <div className="space-y-12">
              {archiveProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-t border-border pt-6"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-sm bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    {project.duration && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">{project.duration}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{project.subtitle}</p>

                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "{project.challenge}"
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.keyOutcomes && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground mb-2 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> Key Outcomes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.keyOutcomes.map((outcome) => (
                          <span key={outcome} className="text-xs px-2 py-1 rounded-sm bg-muted/50 text-muted-foreground">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      View case study <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiments;
