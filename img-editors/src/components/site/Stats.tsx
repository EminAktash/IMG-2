import { motion } from "framer-motion";
import { TrendingUp, Award, Target } from "lucide-react";

const stats = [
  { value: "83.8%", label: "of Program Directors rank the personal statement as a key matching factor", icon: TrendingUp },
  { value: "3.9/5", label: "Average importance rating of residency statements in selection", icon: Award },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-3xl">Why It Matters</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">The Personal Statement Decides Your Match</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-accent/50 transition-colors"
            >
              <s.icon className="w-8 h-8 text-accent mb-4" />
              <div className="text-5xl font-bold font-serif text-accent">{s.value}</div>
              <p className="mt-3 text-primary-foreground/80 leading-relaxed text-base">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
