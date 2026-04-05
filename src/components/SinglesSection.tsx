import { motion } from "framer-motion";
import coverImage from "@/assets/vyshe-pravil-cover.png";

interface Single {
  title: string;
  cover: string;
  link?: string;
}

const singles: Single[] = [
  {
    title: "Выше правил",
    cover: coverImage,
  },
];

const SingleCard = ({ single, index }: { single: Single; index: number }) => {
  return (
    <motion.div
      className="glass-panel p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Cover */}
      <motion.div
        className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden flex-shrink-0 relative"
        style={{
          boxShadow:
            "0 0 30px hsla(185,100%,50%,0.15), 0 0 60px hsla(325,90%,55%,0.08)",
          perspective: 800,
        }}
        whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
      >
        <img
          src={single.cover}
          alt={single.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </motion.div>

      {/* Info */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-body">
            Сингл
          </p>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            {single.title}
          </h3>
        </div>
        <a
          href={single.link || "#"}
          className="neon-glow-btn inline-block text-sm"
        >
          Слушать
        </a>
      </div>
    </motion.div>
  );
};

const SinglesSection = () => {
  return (
    <section id="singles" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Синглы
        </motion.h2>

        <div className="space-y-8">
          {singles.map((single, i) => (
            <SingleCard key={single.title} single={single} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglesSection;
