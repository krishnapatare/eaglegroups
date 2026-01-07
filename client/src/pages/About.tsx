import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="About Eagle Groups" subtitle="Driving innovation through technology excellence" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Eagle Groups, we believe technology is the greatest enabler of human potential. Our mission is to democratize access to enterprise-grade digital solutions, helping businesses of all sizes compete on a global stage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by a team of veteran systems architects and product strategists, we bring decades of combined experience in building scalable, resilient, and secure digital ecosystems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             {/* modern office skyscraper building */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
              alt="Our Headquarters" 
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We don't follow trends; we set them. Our R&D labs are constantly exploring the edge of what's possible."
            },
            {
              title: "Client Partnership",
              desc: "We are not vendors; we are partners. Your success metrics are our KPIs. We build for the long haul."
            },
            {
              title: "Technical Excellence",
              desc: "Code quality, security, and performance are non-negotiable. We adhere to the strictest industry standards."
            }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-4 text-primary">{val.title}</h4>
              <p className="text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
