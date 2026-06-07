import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Globe2, Award } from "lucide-react";
import debra from "@/assets/debra.jpg";

const credentials = [
  { icon: GraduationCap, label: "Master of Science" },
  { icon: BookOpen, label: "U.S. University ESL Professor" },
  { icon: Globe2, label: "Native English Speaker" },
  { icon: Award, label: "Author — Residency Statement in One Day" },
];

export function Expert() {
  return (
    <section id="expert" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 -m-4 bg-gradient-accent rounded-full blur-3xl opacity-30" />
            <img
              src={debra}
              alt="Debra Anazonwu — IMG Editors founder"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-full aspect-square object-cover shadow-elegant border-4 border-card"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-3xl">Meet The Expert</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Debra Anazonwu</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For more than a decade, I've helped International Medical Graduates craft
              personal statements that resonate with Program Directors. Your accomplishments
              and stories deserve to be heard. I help you put them in a format Program
              Directors will listen and respond to.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border">
                  <span className="w-9 h-9 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                    <c.icon className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-foreground text-lg">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
