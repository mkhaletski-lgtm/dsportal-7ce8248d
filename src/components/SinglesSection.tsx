import { motion } from "framer-motion";
import albumCover from "@/assets/cover-vyshe-pravil.jpg";
import coverVyshePravil from "@/assets/cover-vyshe-pravil.jpg";
import coverGrustnaya from "@/assets/cover-grustnaya-istoriya.jpg";
import coverKogdaGlaza from "@/assets/cover-kogda-glaza.jpg";
import coverPokaGorit from "@/assets/cover-poka-gorit-okno.jpg";
import coverHolodny from "@/assets/cover-holodny-svet.jpg";

interface Single {
  title: string;
  cover: string;
}

const singles: Single[] = [
  { title: "Выше правил", cover: coverVyshePravil },
  { title: "Грустная история", cover: coverGrustnaya },
  { title: "Когда глаза говорят", cover: coverKogdaGlaza },
  { title: "Пока горит окно", cover: coverPokaGorit },
  { title: "Холодный свет", cover: coverHolodny },
];

const SingleCard = ({ single, index }: { single: Single; index: number }) => (
  <motion.div
    className="glass-panel p-3 sm:p-4 flex flex-col items-center gap-3"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
  >
    <motion.div
      className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden relative"
      style={{
        boxShadow:
          "0 0 20px hsla(185,100%,50%,0.12), 0 0 40px hsla(325,90%,55%,0.06)",
        perspective: 800,
      }}
      whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
    >
      <img src={single.cover} alt={single.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
    </motion.div>
    <h4 className="text-sm sm:text-base font-display font-semibold text-foreground text-center">
      {single.title}
    </h4>
    <a href="#" className="neon-glow-btn inline-block text-xs sm:text-sm">
      Слушать
    </a>
  </motion.div>
);

const SinglesSection = () => {
  return (
    <section id="singles" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Альбом «Выше правил»
        </motion.h2>

        {/* Album cover */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden relative glass-panel p-2"
            style={{
              boxShadow:
                "0 0 40px hsla(185,100%,50%,0.2), 0 0 80px hsla(325,90%,55%,0.1)",
              perspective: 800,
            }}
            whileHover={{ rotateY: 6, rotateX: -3, scale: 1.02 }}
          >
            <img
              src={albumCover}
              alt="Альбом Выше правил"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-xl" />
          </motion.div>
        </motion.div>

        {/* Singles grid */}
        <motion.h3
          className="text-xl sm:text-2xl font-display font-semibold text-center mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Синглы
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {singles.map((single, i) => (
            <SingleCard key={single.title} single={single} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglesSection;
