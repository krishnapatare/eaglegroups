import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Strategic Discovery",
    desc: "We dive deep into your business model, identifying bottlenecks and opportunities where technology can create leverage."
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Creating the blueprint. We design high-fidelity prototypes and system architectures that align with your long-term goals."
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Iterative builds with weekly sprints. You see progress constantly, ensuring the final product matches your vision perfectly."
  },
  {
    num: "04",
    title: "Rigorous QA",
    desc: "Automated and manual testing across devices and scenarios to ensure a bug-free, robust user experience."
  },
  {
    num: "05",
    title: "Deployment & Scale",
    desc: "Seamless launch protocols and post-deployment monitoring to ensure stability as your user base grows."
  }
];

export default function Process() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="How We Work" 
          subtitle="A battle-tested methodology designed for transparency and velocity." 
        />

        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row text-left md:text-right" : "md:flex-row-reverse text-left"}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[4px] md:left-1/2 md:-ml-[11px] w-6 h-6 rounded-full bg-white border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

                <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-5xl font-bold text-primary/10 mb-2 font-display leading-none">{step.num}</div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
