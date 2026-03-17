import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import laxmiLogo from "@assets/laxmi_1773735415776.png";
import prabhasLogo from "@assets/prabhas_1773735415777.png";
import rajmataLogo from "@assets/rajmata_1773735415777.png";

const clients = [
  { name: "Laxmi Palace", logo: laxmiLogo, link: "https://laxmipalace.netlify.app/" },
  { name: "Prabhas Motors", logo: prabhasLogo, link: "https://prabhasmotorsgarage.netlify.app/" },
  { name: "Rajmata Family Restaurant", logo: rajmataLogo, link: "https://rajmatahotel.netlify.app/" },
];

const ROTATING_WORDS = [
  "Marketing Strategy",
  "Digital Growth",
  "Brand Identity",
  "Business Innovation",
  "Client Excellence",
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex items-baseline gap-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="text-primary font-semibold"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
      <span className="text-primary animate-pulse font-light">|</span>
    </span>
  );
}

export function ClientSection() {
  const setRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (setRef.current) {
      setOffset(setRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Some of our valuable clients</h2>
        <p className="text-slate-500 mt-3 text-lg">
          Trusted by growing businesses across <RotatingWord />
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {offset > 0 && (
          <style>{`
            @keyframes marquee-px {
              0%   { transform: translateX(0px); }
              100% { transform: translateX(-${offset}px); }
            }
            .marquee-px { animation: marquee-px 7s linear infinite; }
          `}</style>
        )}
        <div className={`flex ${offset > 0 ? "marquee-px" : ""}`} style={{ width: "max-content" }}>
          <div ref={setRef} className="flex gap-5 md:gap-10 pr-5 md:pr-10">
            {clients.map((client, i) => (
              <ClientCard key={`a-${i}`} client={client} />
            ))}
          </div>
          <div className="flex gap-5 md:gap-10 pr-5 md:pr-10">
            {clients.map((client, i) => (
              <ClientCard key={`b-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: { name: string; logo: string; link: string } }) {
  return (
    <a
      href={client.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-20 w-36 md:h-24 md:w-52 px-4 md:px-6"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-10 md:max-h-12 max-w-full object-contain"
      />
    </a>
  );
}
