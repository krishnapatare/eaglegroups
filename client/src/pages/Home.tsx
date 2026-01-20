import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Cpu, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white z-10" />
          {/* dark modern office tech environment */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container relative z-10 px-4 text-center">
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
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Strategic IT Solutions <br />
              <span className="text-gradient">for Business Growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Empowering ambitious enterprises through strategic digital transformation, cloud architecture, and next-gen software engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-secondary">
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
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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
              {/* diverse business team collaboration meeting */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team Collaboration" 
                className="relative rounded-3xl border border-white/10 shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
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
