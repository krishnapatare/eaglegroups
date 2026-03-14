import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight, CheckCircle2, Globe, Cpu, Users,
  ChevronLeft, ChevronRight, Code, Smartphone, Layout,
  Cloud, Search, ShieldCheck, MapPin, Phone, Mail, Clock
} from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/SectionHeader";
import { ClientSection } from "@/components/ClientSection";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";

import teamMeetingImg from "@assets/Eagel_Group_image__1773507648271.png";
import serverRoomImg from "@assets/Eagle_Group_Image_1773507648271.png";
import presentationImg from "@assets/Eagel_Group_Employ_Image_2_1773507648272.png";
import digitalLandscapeImg from "@assets/Eagle_Group_Employ_Image__1773507648272.png";
import groupPhotoImg from "@assets/Eagel_Group_Employ_Group_Photo_1773507648272.png";
import founderImg from "@assets/Krushna_Image_Profetional_1767800329973.png";

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

const SERVICES = [
  { icon: Code, title: "Enterprise Web Development", desc: "Scalable, secure, and high-performance web applications built on modern frameworks like React and Next.js." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences that engage users and drive retention on iOS and Android." },
  { icon: Layout, title: "UI/UX Strategy", desc: "User-centric design systems that convert visitors into loyal customers through intuitive interfaces." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS/Azure architecture, DevOps automation, and serverless solutions for maximum uptime and scalability." },
  { icon: Search, title: "Advanced SEO & Marketing", desc: "Data-driven digital marketing strategies to dominate search rankings and acquire high-intent leads." },
  { icon: ShieldCheck, title: "Cybersecurity Audit", desc: "Comprehensive security assessments and penetration testing to protect your critical business assets." },
];

const STEPS = [
  { num: "01", title: "Strategic Discovery", desc: "We dive deep into your business model, identifying bottlenecks and opportunities where technology can create leverage." },
  { num: "02", title: "Architecture & Design", desc: "Creating the blueprint. We design high-fidelity prototypes and system architectures that align with your long-term goals." },
  { num: "03", title: "Agile Development", desc: "Iterative builds with weekly sprints. You see progress constantly, ensuring the final product matches your vision perfectly." },
  { num: "04", title: "Rigorous QA", desc: "Automated and manual testing across devices and scenarios to ensure a bug-free, robust user experience." },
  { num: "05", title: "Deployment & Scale", desc: "Seamless launch protocols and post-deployment monitoring to ensure stability as your user base grows." },
];

const SERVICE_LABELS: Record<string, string> = {
  web: "Web Development",
  mobile: "Mobile App",
  cloud: "Cloud Infrastructure",
  consulting: "Strategic Consulting",
};

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % SLIDES.length);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img key={current} src={SLIDES[current].img} alt={SLIDES[current].label}
            initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: "easeInOut" }} className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/65 to-white" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 pb-8 px-4">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Transforming Digital Future
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight text-slate-950" style={{ lineHeight: "1.15" }}>
              Strategic IT Solutions{" "}<span className="text-gradient">for Business Growth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Empowering ambitious enterprises through strategic digital transformation, cloud architecture, and next-gen software engineering.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center items-center">
              <a href="#contact">
                <Button size="lg" className="h-12 px-7 text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="h-12 px-7 text-base border-primary/30 text-primary hover:bg-primary/5">
                  Explore Services
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-4 py-4 gap-2">
        <button onClick={prev} className="w-9 h-9 shrink-0 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all" aria-label="Previous slide">
          <ChevronLeft className="w-4 h-4 text-slate-700" />
        </button>
        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.p key={current} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest truncate text-center px-2">
              {SLIDES[current].label}
            </motion.p>
          </AnimatePresence>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`transition-all rounded-full ${i === current ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-primary/30"}`}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
        <button onClick={next} className="w-9 h-9 shrink-0 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all" aria-label="Next slide">
          <ChevronRight className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </section>
  );
}

function ContactForm() {
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "", serviceInterest: "consulting" },
  });
  const mutation = useSubmitContact();
  const onSubmit = (data: InsertContact) => {
    const lines = [
      `*New Enquiry from Eagle Groups Website*`, ``,
      `*Name:* ${data.name}`, `*Email:* ${data.email}`,
      data.phone ? `*Phone:* ${data.phone}` : null,
      data.company ? `*Company:* ${data.company}` : null,
      `*Service Interest:* ${SERVICE_LABELS[data.serviceInterest] ?? data.serviceInterest}`,
      ``, `*Message:*`, data.message,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/919356048383?text=${encodeURIComponent(lines)}`, "_blank");
    mutation.mutate(data, { onSuccess: () => form.reset() });
  };

  return (
    <Card className="p-6 md:p-8 border border-slate-200 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} className="bg-white border-border" /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="john@company.com" {...field} className="bg-white border-border" /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input placeholder="+91..." {...field} value={field.value || ""} className="bg-white border-border" /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="company" render={({ field }) => (
              <FormItem><FormLabel>Company (Optional)</FormLabel><FormControl><Input placeholder="Your Company" {...field} value={field.value || ""} className="bg-white border-border" /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
          <FormField control={form.control} name="serviceInterest" render={({ field }) => (
            <FormItem><FormLabel>Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || "consulting"}>
                <FormControl><SelectTrigger className="bg-white border-border"><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                  <SelectItem value="consulting">Strategic Consulting</SelectItem>
                </SelectContent>
              </Select><FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem><FormLabel>Message</FormLabel><FormControl>
              <Textarea placeholder="Tell us about your project..." className="min-h-[130px] bg-white border-border" {...field} />
            </FormControl><FormMessage /></FormItem>
          )} />
          <Button type="submit" size="lg" disabled={mutation.isPending}
            className="w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
              <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.648 4.886 1.88 7.01L2 30l7.19-1.857A13.93 13.93 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.456a11.39 11.39 0 01-5.812-1.598l-.416-.248-4.268 1.102 1.13-4.142-.272-.43a11.41 11.41 0 01-1.748-6.137c0-6.31 5.137-11.447 11.386-11.447 6.252 0 11.388 5.137 11.388 11.447 0 6.253-5.136 11.453-11.388 11.453zm6.26-8.572c-.344-.172-2.036-1.004-2.352-1.12-.314-.115-.543-.172-.772.173-.228.344-.884 1.12-1.083 1.35-.2.23-.4.258-.743.086-.345-.172-1.454-.536-2.77-1.71-1.024-.915-1.714-2.044-1.916-2.388-.2-.345-.022-.531.15-.702.154-.155.345-.402.517-.604.172-.2.23-.345.345-.573.115-.23.058-.43-.03-.604-.086-.172-.772-1.862-1.056-2.55-.28-.67-.563-.578-.773-.59l-.656-.01c-.23 0-.603.086-.918.43-.315.344-1.2 1.174-1.2 2.863s1.228 3.322 1.4 3.55c.172.23 2.416 3.69 5.856 5.173.819.354 1.458.564 1.956.722.822.26 1.571.224 2.163.136.66-.099 2.036-.832 2.322-1.636.287-.803.287-1.492.2-1.636-.085-.143-.313-.23-.657-.4z"/>
            </svg>
            {mutation.isPending ? "Sending..." : "Send via WhatsApp"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlideshow />

      {/* Stats */}
      <section className="py-20 border-y border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Implementations", value: "50+", icon: Globe },
              { label: "Client Endorsement", value: "98%", icon: Users },
              { label: "ROI Improvement", value: "3x", icon: Cpu },
              { label: "Experts", value: "25+", icon: CheckCircle2 },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-primary/10">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="About Eagle Groups" subtitle="Driving innovation through technology excellence" />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Eagle Groups, we believe technology is the greatest enabler of human potential. Our mission is to democratize access to enterprise-grade digital solutions, helping businesses of all sizes compete on a global stage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by a team of veteran systems architects and product strategists, we bring decades of combined experience in building scalable, resilient, and secure digital ecosystems.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={teamMeetingImg} alt="Eagle Groups Team at Work" className="rounded-2xl shadow-2xl border border-slate-200 w-full object-cover" />
            </motion.div>
          </div>

          {/* Founder */}
          <div className="glass-card p-6 md:p-12 rounded-2xl border border-border mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center md:justify-start">
                <div className="relative inline-block w-full max-w-[280px] md:max-w-md">
                  <img src={founderImg} alt="Krushna - Founder" className="w-full aspect-square rounded-2xl shadow-2xl border-2 border-primary/20 object-cover" />
                  <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-lg font-bold shadow-lg text-sm">Founder</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Krushna</h3>
                <p className="text-primary font-medium text-lg md:text-xl mb-5">Founder & Lead Digital Transformation Strategist</p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-7">
                  Krushna leads the strategic vision at Eagle Groups. With an enterprise-focused mindset, he specializes in building high-performance digital ecosystems that deliver measurable ROI and operational excellence.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[["10+", "Years Exp."], ["50+", "Projects"], ["3x", "ROI Focus"]].map(([val, label]) => (
                    <div key={label} className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-xl font-bold text-primary">{val}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Innovation First", desc: "We don't follow trends; we set them. Our R&D labs are constantly exploring the edge of what's possible." },
              { title: "Client Partnership", desc: "We are not vendors; we are partners. Your success metrics are our KPIs. We build for the long haul." },
              { title: "Technical Excellence", desc: "Code quality, security, and performance are non-negotiable. We adhere to the strictest industry standards." },
            ].map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-primary">{val.title}</h4>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Banner */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={groupPhotoImg} alt="Eagle Groups Full Team" className="w-full h-64 md:h-96 object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent flex items-end p-8 md:p-12">
              <div>
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">The Eagle Groups Family</h3>
                <p className="text-white/80 text-base md:text-lg max-w-xl">25+ passionate professionals united by a mission to transform businesses through technology.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Expertise" subtitle="Comprehensive digital solutions tailored for enterprise growth." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-20">
            {SERVICES.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <ClientSection />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="How We Work" subtitle="A battle-tested methodology designed for transparency and velocity." />
          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
            <div className="space-y-12">
              {STEPS.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-[4px] md:left-1/2 md:-ml-[11px] w-6 h-6 rounded-full bg-white border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                    <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-5xl font-bold text-primary/10 mb-2 font-display leading-none">{step.num}</div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Life at Eagle Groups" subtitle="A glimpse into our team, culture, and the cutting-edge environments we work in." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group shadow-md ${i === 0 || i === 3 ? "md:col-span-2" : i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                <img src={item.img} alt={item.caption} className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm md:text-base">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Ready to start your transformation? Let's discuss your project." />
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1 space-y-8">
              <Card className="p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  {[
                    { icon: MapPin, title: "Visit Us", text: "123 Tech Park, Cyber City, Hyderabad, IN 500081" },
                    { icon: Phone, title: "Call Us", text: "+91 93560 48383" },
                    { icon: Mail, title: "Email Us", text: "hello@egalgroup.in" },
                    { icon: Clock, title: "Working Hours", text: "Mon – Fri: 9AM – 6PM" },
                  ].map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{title}</h5>
                        <p className="text-muted-foreground text-sm">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={groupPhotoImg} alt="Eagle Groups Team" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Vision?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a 30-minute strategic digital audit with our senior architects. Limited availability.
          </p>
          <a href="#contact">
            <Button size="lg" className="h-16 px-10 text-xl bg-primary text-primary-foreground hover:bg-primary/90">
              Get Digital Audit (₹99)
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
