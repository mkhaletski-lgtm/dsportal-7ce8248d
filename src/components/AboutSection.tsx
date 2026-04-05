import { motion } from "framer-motion";
import artistPhoto from "@/assets/artist-photo.png";

const AboutSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center lg:text-left mb-12 text-gradient-hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              textShadow: "0 0 30px hsla(185,100%,50%,0.4), 0 0 60px hsla(185,100%,50%,0.2)",
            }}
          >
            DREAMSYNT — звук ночного города, который ведёт вперёд
          </motion.h2>

          <motion.div
            className="glass-panel p-6 sm:p-10 space-y-6 text-muted-foreground font-body text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              <span className="text-foreground font-semibold">DREAMSYNT</span> — это проект музыкального продюсера Максима Халецкого (Беларусь), где современный русский dance-pop встречается с кинематографичным synthwave. Каждый трек — не просто композиция, а законченная история: пульсирующий электронный бит на 100–125 BPM, глубокий бас-баритон, атмосферные синтезаторные пэды и мощные ритмические акценты, которые заставляют сердце биться в унисон с музыкой.
            </p>
            <p>
              В основе DREAMSYNT — честные темы: любовь, успех, внутренняя сила и движение к вершинам. Мы не следуем шаблонам. Мы создаём саундтреки к моментам, когда асфальт мокрый от дождя, фары режут ночь, а внутри рождается уверенность: <span className="text-foreground italic">«Мы выше правил»</span>.
            </p>
            <p>
              Продуманная аранжировка, студийное качество продакшена и вокал, в котором слышна каждая эмоция — от уязвимого шёпота до мощного, открытого припева.
            </p>
            <p className="text-foreground font-semibold">
              DREAMSYNT — это музыка для тех, кто не стоит на месте.
            </p>
            <p
              className="text-center text-xl sm:text-2xl font-display font-bold text-gradient-hero pt-4"
              style={{
                textShadow: "0 0 20px hsla(185,100%,50%,0.3)",
              }}
            >
              Слушай. Чувствуй. Двигайся вперёд.
            </p>
          </motion.div>
        </div>

        {/* Artist photo */}
        <motion.div
          className="flex-shrink-0 w-72 sm:w-80 lg:w-96"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
          style={{ perspective: 800 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 40px hsla(185,100%,50%,0.12), 0 0 80px hsla(325,90%,55%,0.06)",
            }}
          >
            <img
              src={artistPhoto}
              alt="DREAMSYNT artist"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
