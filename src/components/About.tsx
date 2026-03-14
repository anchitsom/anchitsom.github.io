import { motion } from "framer-motion";

const About = () => {
  return (
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
          <a
            href="mailto:anchit.som@gmail.com?subject=CV%20Request"
            className="inline-block mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-4"
          >
            Request CV →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
