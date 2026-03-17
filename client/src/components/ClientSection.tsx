import { motion } from "framer-motion";

const clients = [
  { name: "Prabhas Motors", category: "Automotive", link: "https://prabhasmotorsgarage.netlify.app/" },
  { name: "Laxmi Palace", category: "Hospitality", link: "https://laxmipalace.netlify.app/" },
  { name: "Rajmata Hotel", category: "Hospitality", link: "https://rajmatahotel.netlify.app/" },
  { name: "Prabhas Motors", category: "Automotive", link: "https://prabhasmotorsgarage.netlify.app/" },
  { name: "Laxmi Palace", category: "Hospitality", link: "https://laxmipalace.netlify.app/" },
  { name: "Rajmata Hotel", category: "Hospitality", link: "https://rajmatahotel.netlify.app/" },
  { name: "Prabhas Motors", category: "Automotive", link: "https://prabhasmotorsgarage.netlify.app/" },
  { name: "Laxmi Palace", category: "Hospitality", link: "https://laxmipalace.netlify.app/" },
  { name: "Rajmata Hotel", category: "Hospitality", link: "https://rajmatahotel.netlify.app/" },
];

export function ClientSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Some of our valuable clients</h2>
        <p className="text-slate-500 mt-3 text-lg">Trusted by growing businesses across industries</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        >
          {clients.map((client, i) => (
            <a
              key={i}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 h-28 w-52 px-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-lg">{client.name.charAt(0)}</span>
              </div>
              <span className="font-bold text-slate-800 text-sm text-center leading-tight">{client.name}</span>
              <span className="text-xs text-primary font-medium mt-1 uppercase tracking-wider">{client.category}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
