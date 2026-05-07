import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/dreamsynt-logo.png";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Альбомы", href: "#singles" },
  { label: "Контакты", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border/30 shadow-[0_4px_30px_hsla(185,100%,50%,0.05)]"
          : "py-5 bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="shrink-0">
          <img src={logo} alt="DREAMSYNT" className="h-5 sm:h-7" />
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-xs sm:text-sm font-display tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
