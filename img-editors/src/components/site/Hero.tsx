import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-doctors.png";


export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-mesh">
      {/* floating shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div className="absolute top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
              Your Story.<br />Your Match.
              <span className="block text-gradient-primary mt-2">Residency Personal Statement Coaching for IMGs.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Stand out to U.S. Program Directors. Get interviews — not rejections —
              with personal statement coaching from a U.S. insider and English expert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="xl" variant="hero">
                <Link to="/resources">Learn More <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-30" />
            <img
              src={heroImg}
              alt="International medical graduates matched into U.S. residency programs"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
