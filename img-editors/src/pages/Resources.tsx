import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const CALENDLY_URL = "https://calendly.com/d-anazonwu";

const ebooks = [
  {
    title: "How to Get Licensed as a U.S. M.D.: Residency or Alternative Certification",
    desc: "Strategies for IMGs navigating residency match or alternative U.S. licensing pathways.",
    price: "$3.99",
    href: "mailto:d.anazonwu@gmail.com?subject=Ebook%20Purchase%20%E2%80%93%20Alternative%20Residency%20Pathways%20(%243.99)",
  },
  {
    title: "How to Write Your Residency Personal Statement in One Day",
    desc: "A step-by-step guide with a 19-item questionnaire to craft a compelling personal statement fast.",
    price: "$7.99",
    href: "mailto:d.anazonwu@gmail.com?subject=Ebook%20Purchase%20%E2%80%93%20Residency%20Personal%20Statement%20Guide%20(%247.99)",
  },
];

const addons = [
  { label: "Additional Zoom session", price: "$47 / 30 min" },
  { label: "Additional essays or application answers", price: "$75 / hr" },
];

export default function ResourcesPage() {
  useEffect(() => {
    document.title = "Resources — IMG Editors";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
      document.head.removeChild(robots);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Section 1 — Calendly */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-primary text-primary-foreground">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
          <div className="absolute top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />
          <div className="container mx-auto px-6 relative">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 mb-10 pl-2 pr-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-accent/60 text-primary-foreground text-sm font-medium shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-x-0.5"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground group-hover:-translate-x-0.5 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </span>
              Back to home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Not Sure Where to Start? <span className="text-white block mt-2">Book a Call</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Book a free 15-minute Zoom call with Debra. She'll review your situation and point you in the right direction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-elegant"
            >
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px", height: "630px" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Ebooks */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <p className="text-accent font-semibold tracking-widest uppercase text-sm">Ebooks</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Guides Written by Debra</h2>
              <p className="mt-4 text-muted-foreground">
                Email Debra to purchase either ebook and receive it directly in your inbox.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {ebooks.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl p-8 border border-border bg-card flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary leading-snug">{e.title}</h3>
                  <p className="mt-3 text-muted-foreground flex-1">{e.desc}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-bold font-serif text-primary">{e.price}</span>
                  </div>
                  <Button asChild variant="hero" size="lg" className="w-full mt-6">
                    <a href={e.href}>
                      <Mail className="w-4 h-4" /> Email to Purchase — {e.price}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Add-Ons teaser */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-2xl border border-border bg-secondary/50 p-6 md:p-8 text-center"
            >
              <Link
                to="/#pricing"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                When you're ready for more support <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {addons.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm"
                  >
                    <span className="font-medium text-foreground">{a.label}</span>
                    <span className="font-bold text-accent">{a.price}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
