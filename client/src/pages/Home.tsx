import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Globe, Cpu, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

import teamMeetingImg from "@assets/Eagel_Group_image__1773507648271.png";
import serverRoomImg from "@assets/Eagle_Group_Image_1773507648271.png";
import presentationImg from "@assets/Eagel_Group_Employ_Image_2_1773507648272.png";
import digitalLandscapeImg from "@assets/Eagle_Group_Employ_Image__1773507648272.png";
import groupPhotoImg from "@assets/Eagel_Group_Employ_Group_Photo_1773507648272.png";

const SLIDES = [
  { img: digitalLandscapeImg, label: "Eagle Groups — Shaping the Digital Future" },
  { img: teamMeetingImg, label: "Our Team at Work" },
  { img: presentationImg, label: "Data-Driven Strategy" },
  { img: serverRoomImg, label: "Cloud Infrastructure Experts" },
  { img: groupPhotoImg, label: "Meet the Eagle Groups Family" },
];

const GALLERY = [
  { img: teamMeetingImg, caption: "Team Collaboration" },
  { img: presentationImg, caption: "Strategic Presentation" },
  { img: serverRoomImg, caption: "Cloud Infrastructure" },
  { img: digitalLandscapeImg, caption: "Eagle Groups Vision" },
  { img: groupPhotoImg, caption: "Our People" },
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % SLIDES.length);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={SLIDES[current].img}
            alt={SLIDES[current].label}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/65 to-white" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 pb-8 px-4">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Transforming Digital Future
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight text-slate-950" style={{ lineHeight: "1.15" }}>
              Strategic IT Solutions{" "}
              <span className="text-gradient">for Business Growth</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Empowering ambitious enterprises through strategic digital transformation, cloud architecture, and next-gen software engineering.
            </p>

            <div className="flex flex-row flex-wrap gap-3 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-7 text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-12 px-7 text-base border-primary/30 text-primary hover:bg-primary/5">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-4 py-4 gap-2">
        <button
          onClick={prev}
          className="w-9 h-9 shrink-0 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-slate-700" />
        </button>

        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest truncate text-center px-2"
            >
              {SLIDES[current].label}
            </motion.p>
          </AnimatePresence>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all rounded-full ${i === current ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-primary/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="w-9 h-9 shrink-0 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlideshow />

      {/* Stats Section */}
      <section className="py-20 border-y border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Implementations", value: "50+", icon: Globe },
              { label: "Client Endorsement", value: "98%", icon: Users },
              { label: "ROI Improvement", value: "3x", icon: Cpu },
              { label: "Experts", value: "25+", icon: CheckCircle2 },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-primary/10"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                align="left"
                title="We Are Architects of Digital Ecosystems"
                subtitle="We don't just build software; we engineer growth engines. Our approach combines technical excellence with deep industry insight."
              />
              <ul className="space-y-6">
                {[
                  "Enterprise-grade security and scalability by default.",
                  "Agile methodology ensuring rapid time-to-market.",
                  "Data-driven decision making frameworks.",
                  "Cross-functional teams of industry veterans."
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30" />
              <img
                src={presentationImg}
                alt="Eagle Groups Team Presenting Strategy"
                className="relative rounded-3xl border border-slate-200 shadow-2xl z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Life at Eagle Groups"
            subtitle="A glimpse into our team, culture, and the cutting-edge environments we work in."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group shadow-md ${
                  i === 0 || i === 3 ? "md:col-span-2" : i === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm md:text-base">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={groupPhotoImg}
            alt="Eagle Groups Team"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Vision?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a 30-minute strategic digital audit with our senior architects. Limited availability.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-16 px-10 text-xl bg-primary text-primary-foreground hover:bg-primary/90">
                Get Digital Audit (₹99)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
