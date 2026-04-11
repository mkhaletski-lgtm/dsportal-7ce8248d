import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, hsla(270,80%,60%,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          DREAMSYNT
        </motion.p>
        <p className="text-muted-foreground text-sm font-body mb-8">
          AI-Powered Music · Electronic Pop · Synthwave
        </p>

        <div className="glass-panel inline-flex gap-6 px-6 py-3 mb-8">
          {["YouTube", "Spotify", "VK"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {platform}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/50 font-body leading-relaxed max-w-2xl mx-auto">
          © 2026 DREAMSYNT. Все права защищены.
          <br />
          Все музыкальные произведения, фонограммы, тексты и визуальные материалы проекта охраняются законодательством РФ об авторском праве и смежных правах, а также международными договорами. Любое копирование, распространение, публичное исполнение, размещение на сторонних ресурсах или использование в любых целях без предварительного письменного согласия правообладателя запрещено. Для получения лицензии:{" "}
          <a
            href="mailto:dreamsynt.ru@gmail.com"
            className="text-primary/70 hover:text-primary transition-colors underline"
          >
            написать на e-mail
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
