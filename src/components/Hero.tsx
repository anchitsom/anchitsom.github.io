import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-0">
      <div className="prose-editorial">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] tracking-tight mb-8"
        >
          Shaping products & organisations through strategy, systems thinking & design.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px]"
        >
          Product leader writing about strategy, operations, and building at the intersection of business and technology. Based in London.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
