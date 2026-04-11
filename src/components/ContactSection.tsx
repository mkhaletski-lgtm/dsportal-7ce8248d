import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.comment) {
      toast({ title: "Ошибка", description: "Заполните все обязательные поля", variant: "destructive" });
      return;
    }
    toast({ title: "Отправлено!", description: "Мы свяжемся с вами в ближайшее время." });
    setForm({ name: "", phone: "", email: "", comment: "" });
  };

  const inputClass =
    "bg-transparent border-[hsla(325,90%,55%,0.4)] focus:border-[hsl(325,90%,55%)] focus-visible:ring-[hsla(325,90%,55%,0.5)] text-foreground placeholder:text-muted-foreground font-body transition-all duration-300 hover:border-[hsla(325,90%,55%,0.7)]";

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Написать нам
        </motion.h2>

        <motion.form
          className="glass-panel p-6 sm:p-10 flex flex-col gap-5"
          style={{
            boxShadow: "0 0 30px hsla(325,90%,55%,0.08), 0 0 60px hsla(185,100%,50%,0.04)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm text-muted-foreground font-display tracking-wider uppercase mb-2 block">
              Имя <span className="text-secondary">*</span>
            </label>
            <Input
              className={inputClass}
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground font-display tracking-wider uppercase mb-2 block">
              Телефон <span className="text-secondary">*</span>
            </label>
            <Input
              className={inputClass}
              placeholder="+7 (___) ___-__-__"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground font-display tracking-wider uppercase mb-2 block">
              E-mail <span className="text-secondary">*</span>
            </label>
            <Input
              className={inputClass}
              placeholder="email@example.com"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground font-display tracking-wider uppercase mb-2 block">
              Комментарий <span className="text-secondary">*</span>
            </label>
            <Textarea
              className={`${inputClass} min-h-[120px]`}
              placeholder="Ваше сообщение..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="neon-glow-btn-magenta mt-4 w-full text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Отправить сообщение
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
