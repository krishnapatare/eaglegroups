import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import hospitalImg from "@assets/stock_images/professional_hospita_2a7cc928.jpg";
import hotelImg from "@assets/stock_images/luxury_hotel_website_9128f4ba.jpg";
import restaurantImg from "@assets/stock_images/modern_restaurant_we_d575f18a.jpg";

const clients = [
  {
    name: "City General Hospital",
    category: "Healthcare",
    image: hospitalImg,
    description: "Enterprise-grade patient portal and internal management system."
  },
  {
    name: "Grand Azure Hotel",
    category: "Hospitality",
    image: hotelImg,
    description: "Premium booking ecosystem with real-time inventory management."
  },
  {
    name: "The Velvet Bistro",
    category: "Restaurant",
    image: restaurantImg,
    description: "Digital storefront with integrated reservation and POS system."
  }
];

export function ClientSection() {
  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Client " 
          subtitle="A glimpse into the high-performance digital ecosystems we've engineered. Websites and applications tailored for industry leaders."
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/20"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="text-primary font-medium mb-2">{client.category}</div>
                <h3 className="text-2xl font-bold mb-4">{client.name}</h3>
                <p className="text-muted-foreground">{client.description}</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Platform</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">
                    {client.category === "Mobile App" ? "Application" : "Website"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
