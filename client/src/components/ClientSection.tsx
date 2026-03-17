import { motion } from "framer-motion";
import laxmiLogo from "@assets/laxmi_1773735415776.png";
import prabhasLogo from "@assets/prabhas_1773735415777.png";
import rajmataLogo from "@assets/rajmata_1773735415777.png";

const clients = [
  { name: "Laxmi Palace", logo: laxmiLogo, link: "https://laxmipalace.netlify.app/" },
  { name: "Prabhas Motors", logo: prabhasLogo, link: "https://prabhasmotorsgarage.netlify.app/" },
  { name: "Rajmata Family Restaurant", logo: rajmataLogo, link: "https://rajmatahotel.netlify.app/" },
];

const duplicated = [...clients, ...clients, ...clients];

export function ClientSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Some of our valuable clients</h2>
        <p className="text-slate-500 mt-3 text-lg">Trusted by growing businesses across industries</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-5 md:gap-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          {duplicated.map((client, i) => (
            <a
              key={i}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
