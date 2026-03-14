import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Users, Award } from "lucide-react";

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
      "Points-based credibility system separating trustworthy professionals from unreliable ones",
      "Mentor-mediated support system for freelancer guidance and dispute resolution",
      "Career progression pathway enabling senior freelancers to become mentors",
      "Project received high grades and positive jury feedback"
    ],
    methods: ["User Interviews (9 freelancers, 4 clients)", "Cross-cultural research (India, US, China, Japan)", "Storyboards & Low-fidelity Wireframes", "Two rounds of user testing"],
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
    description: "A year-long behavior change initiative for a major manufacturing facility. The project shifted from punitive to positive reinforcement approaches, using nudging and social proof to drive lasting cultural change around workplace safety.",
    keyOutcomes: [
      "34% reduction in unsafe behavior",
      "Badge Honor System recognizing safe conduct implemented",
      "Accountability System with management transparency for condition resolution",
      "Shift from punitive to positive reinforcement culture"
    ],
    methods: ["13 user interviews", "30 hours of field observation", "Ethnographic study", "2 group discussions"],
    href: "https://anchitsom.com/FactorySafety.html",
  },
  {
    title: "FoodByte IoT",
    subtitle: "Hardware Engineering for Sustainability",
    year: "2018",
    duration: "2 weeks (MEMSI Bootcamp)",
    role: "UX Design & Android Development",
    category: "Service Design",
    challenge: "Design an IoT solution to tackle food wastage using hardware engineering and design.",
    description: "Part of MEMSI (MIT Entrepreneurship and Maker Skills Integrator) — a collaborative bootcamp between MIT and Hong Kong students. We developed a smart tracking system using IoT tags combined with a mobile app to help users track food items, receive reminder notifications, and gamify reduced food waste.",
    keyOutcomes: [
      "Smart tag solution replacing complex pressure sensors",
      "Mobile app with tracking and reminder notifications",
      "Achievement badges for gamification",
      "Won jury award at final showcase pitch"
    ],
    methods: ["User interviews (two rounds)", "Market research", "Fridge studies", "Card sorting activities"],
    href: "https://anchitsom.com/foodbyte.html",
  },
  {
    title: "ResearchOps",
    subtitle: "Scaling a Design Research Team",
    year: "2019",
    duration: "2.5 months",
    role: "Design Researcher (reporting to CEO)",
    category: "Process Design",
    challenge: "Develop new internal processes to tackle challenges faced by a Design Research Team.",
    description: "An internal initiative to restructure how a Design Research team operates by identifying frustration points and developing new practices. The project addressed data quality loss, time constraints from documentation, and communication breakdowns between leadership and researchers.",
    keyOutcomes: [
      "Identified two key personas: The Strategist Lead and The Purist Researcher",
      "Research findings informed adoption of UX research platforms",
      "Organization transitioned to two intelligent platforms based on recommendations",
      "Replaced manual processes with automated solutions"
    ],
    methods: ["Ethnographic immersion", "Secondary research", "Interviews", "Card sorting exercises"],
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
    description: "A loyalty-based dining product that enables customers to tag and review dining experiences, creating a digitally searchable restaurant identity while earning loyalty miles for contributions. The core insight: dining experiences function as narratives that shape memory and emotion.",
    keyOutcomes: [
      "Tag-based restaurant discovery system",
      "Miles earned through quick Q&A reviews at bill payment",
      "Qualitative insights aggregation for restaurants",
      "Lifestyle integration for AsiaMiles program"
    ],
    methods: ["9 contextual interviews in restaurants", "Visual ethnography", "TripAdvisor review analysis", "Journey mapping & storyboards"],
    href: "https://anchitsom.com/asiamiles.html",
  },
];

const Archive = () => {
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
              Archive
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-[560px]">
              A collection of service design, UX, and process design work from 2018–2021 — my formative years studying at the University of Hong Kong and Royal College of Art.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground mb-16">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> 2018–2021
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" /> HKU & RCA
              </span>
            </div>
          </motion.div>

          <div className="space-y-16">
            {archiveProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="border-t border-border pt-8"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded-sm bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  {project.duration && (
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  )}
                </div>

                <h2 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">{project.subtitle}</p>

                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Role:</span> {project.role}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-1">Challenge</p>
                  <p className="text-muted-foreground italic">"{project.challenge}"</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.keyOutcomes && (
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Key Outcomes
                    </p>
                    <ul className="space-y-1.5">
                      {project.keyOutcomes.map((outcome, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.methods && (
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {project.methods.map((method) => (
                        <span key={method} className="text-xs px-2 py-1 rounded-sm bg-muted text-muted-foreground">
                          {method}
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
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    View original case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Archive;
