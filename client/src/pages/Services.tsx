import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Code, Smartphone, Layout, Cloud, Search, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ClientSection } from "@/components/ClientSection";

const SERVICES = [
  {
    icon: Code,
    title: "Enterprise Web Development",
    desc: "Scalable, secure, and high-performance web applications built on modern frameworks like React and Next.js."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that engage users and drive retention on iOS and Android."
  },
  {
    icon: Layout,
    title: "UI/UX Strategy",
    desc: "User-centric design systems that convert visitors into loyal customers through intuitive interfaces."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "AWS/Azure architecture, DevOps automation, and serverless solutions for maximum uptime and scalability."
  },
  {
    icon: Search,
    title: "Advanced SEO & Marketing",
    desc: "Data-driven digital marketing strategies to dominate search rankings and acquire high-intent leads."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Audit",
    desc: "Comprehensive security assessments and penetration testing to protect your critical business assets."
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Expertise" 
          subtitle="Comprehensive digital solutions tailored for enterprise growth." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Review / Showcase Section */}
        <ClientSection />

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/20 to-blue-900/20 border border-primary/20 text-center">
          <h3 className="text-3xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every business is unique. We build bespoke software architectures designed specifically for your operational needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Talk to an Architect</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
