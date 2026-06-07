import { motion } from "framer-motion";
import { Check, Lock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Evaluation & Light Editing",
    price: "$97",
    turnaround: "2 business day turnaround",
    desc: "Polished proofreading with no content changes",
    label: "Most Economical",
    features: [
      "Spelling, grammar & punctuation editing",
      "Light proofreading pass",
      "Written evaluation feedback",
    ],
    bestFor: "Candidates who want confirmation they're on the right track",
    cta: "Learn More",
    ctaHref: "#contact",
    variant: "outline" as const,
  },
  {
    name: "Revision & Critique",
    price: "$297",
    turnaround: "3–4 day turnaround",
    desc: "Limited content changes + strategy session",
    label: "Most Popular",
    features: [
      "Copyediting & word choice",
      "Syntax & sentence flow",
      "Adding transitions for clarity",
      "Zoom strategy session included",
      "Up to two revisions included (one revision can include new material based on Zoom transcripts)",
    ],
    bestFor: "Those who need some guidance but are satisfied with the overall direction of their statement",
    cta: "Purchase Package",
    ctaHref: "#contact",
    variant: "hero" as const,
  },
  {
    name: "Finished for You",
    price: "$497",
    turnaround: "3–4 day turnaround",
    desc: "Unlimited content changes + strategy and editing sessions",
    label: "Most Comprehensive",
    features: [
      "Substantive content editing",
      "Strengthen weak sections",
      "30-60 min strategy call plus additional coaching sessions as needed",
      "Unlimited revisions (can include new material based on Zoom transcripts)",
    ],
    bestFor: "Those who feel overwhelmed and need maximum guidance",
    cta: "Book Session",
    ctaHref: "#contact",
    variant: "premium" as const,
  },
];

const addons = [
  { label: "Additional Zoom session", price: "$47 / 30 min" },
  { label: "Additional essays or application answers", price: "$75 / hr" },
];

export function Pricing() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-3xl">Services & Pricing</p>
          <h2 id="pricing" className="mt-3 text-3xl md:text-5xl font-bold text-primary">Choose Your Path to Match</h2>
          <p className="mt-4 text-muted-foreground">Transparent pricing. No hidden fees.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border ${
                t.label === "Most Popular"
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant md:scale-[1.03]"
                  : "bg-card border-border"
              }`}
            >
              {t.label && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  t.label === "Most Popular"
                    ? "bg-gradient-accent text-accent-foreground"
                    : "bg-secondary text-foreground border border-border"
                }`}>
                  {t.label}
                </span>
              )}
              <h3 className={`text-xl font-bold ${t.label === "Most Popular" ? "text-primary-foreground" : "text-primary"}`}>{t.name}</h3>
              <p className={`mt-1 text-sm ${t.label === "Most Popular" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`text-5xl font-bold font-serif ${t.label === "Most Popular" ? "text-accent" : "text-primary"}`}>{t.price}</span>
              </div>
              <p className={`mt-1 text-xs font-medium ${t.label === "Most Popular" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.turnaround}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                    <span className={t.label === "Most Popular" ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`mt-6 p-3 rounded-xl text-sm ${t.label === "Most Popular" ? "bg-white/10 text-primary-foreground/90" : "bg-secondary text-foreground"}`}>
                <span className="font-semibold text-accent">Best for: </span>
                {t.bestFor}
              </div>
              <Button asChild variant={t.variant} size="lg" className="w-full mt-6">
                <a href={t.ctaHref}>
                  {t.cta !== "Learn More" && <Lock className="w-4 h-4" />}
                  {t.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4 text-xl">
            <Plus className="w-4 h-4 text-accent" />
            <h3 className="font-semibold text-primary">Add-Ons</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {addons.map((a) => (
              <div key={a.label} className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border">
                <span className="font-medium text-foreground text-lg">{a.label}</span>
                <span className="font-bold text-accent text-lg">{a.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
