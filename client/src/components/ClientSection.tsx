import { motion } from "framer-motion";
import prabhasLogo from "../assets/logos/prabhas.png";
import laxmiLogo from "../assets/logos/laxmi.png";
import rajmataLogo from "../assets/logos/rajmata.png";

const clients = [
  {
    name: "Prabhas Motors",
    logo: prabhasLogo,
    link: "https://prabhasmotorsgarage.netlify.app/",
  },
  {
    name: "Laxmi Palace",
    logo: laxmiLogo,
    link: "https://laxmipalace.netlify.app/",
  },
  {
    name: "Rajmata Hotel",
    logo: rajmataLogo,
    link: "https://rajmatahotel.netlify.app/",
  },
];

export function ClientSection() {
  const duplicated = [...clients, ...clients, ...clients]; // triple duplicate for seamless loop

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">
          Some of our valuable clients
        </h2>
      </div>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicated.map((client, i) => (
            <a
              key={i}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm h-24 w-48 hover:shadow-xl transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}