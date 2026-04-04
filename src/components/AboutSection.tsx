import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-12 text-gradient-hero"
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
            <span className="text-foreground font-semibold">DREAMSYNT</span> — это музыкальный проект Максима Халецкого (Республика Беларусь), где современный русский dance-pop встречается с кинематографичным synthwave. Каждый трек — не просто композиция, а законченная история: пульсирующий электронный бит на 100–125 BPM, глубокий бас-баритон, атмосферные синтезаторные пэды и мощные ритмические акценты, которые заставляют сердце биться в унисон с музыкой.
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
    </section>
  );
};

export default AboutSection;
