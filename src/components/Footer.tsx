import { motion } from "framer-motion";
import iconYandexMusic from "@/assets/icon-yandex-music.png";
import iconVkMusic from "@/assets/icon-vk-music.png";
import iconSpotify from "@/assets/icon-spotify.png";

const socials = [
  { label: "Яндекс музыка", href: "https://clck.ru/3TRxDN", icon: iconYandexMusic },
  { label: "Spotify", href: "https://clck.ru/3TRxFE", icon: iconSpotify },
  { label: "VK", href: "https://clck.ru/3TRxGo", icon: iconVkMusic },
];

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

        <div className="glass-panel inline-flex flex-wrap justify-center gap-6 px-6 py-3 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <img src={s.icon} alt="" aria-hidden="true" className="w-4 h-4" />
              <span>{s.label}</span>
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
