import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { 
  Building2, 
  Coffee, 
  Home, 
  BookOpen, 
  Car, 
  ShoppingBag,
  Utensils,
  DollarSign,
  Code,
  ShoppingCart,
  Landmark,
  Briefcase
} from "lucide-react";

const CLIENTS = [
  {
    name: "Rajmata Hotel",
    category: "Hotels",
    icon: Landmark,
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Luxury Stay",
    category: "Hotels",
    icon: Building2,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Chai Tapri",
    category: "Cafes",
    icon: Coffee,
    color: "from-amber-700 to-yellow-600"
  },
  {
    name: "Cafe Corner",
    category: "Cafes",
    icon: Utensils,
    color: "from-pink-500 to-rose-600"
  },
  {
    name: "Global Realty",
    category: "Real Estate",
    icon: Home,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Dream Home Builders",
    category: "Real Estate",
    icon: Building2,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Vidya School",
    category: "Education",
    icon: BookOpen,
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Scholar's Academy",
    category: "Education",
    icon: Briefcase,
    color: "from-blue-600 to-purple-600"
  },
  {
    name: "Auto Wheels Showroom",
    category: "Showrooms",
    icon: Car,
    color: "from-gray-700 to-slate-800"
  },
  {
    name: "Fashion Hub",
    category: "Showrooms",
    icon: ShoppingBag,
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    name: "Tech Solutions",
    category: "General Business",
    icon: Code,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Fresh Mart",
    category: "General Business",
    icon: ShoppingCart,
    color: "from-lime-500 to-green-600"
  }
];

export default function Clients() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Some of our valuable clients" 
          subtitle="" 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {CLIENTS.map((client, idx) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-300">
                  {/* Icon */}
                  <div className={`h-14 w-14 mb-4 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Brand Name */}
                  <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-1 line-clamp-2 group-hover:text-slate-700 transition-colors">
                    {client.name}
                  </h3>

                  {/* Category */}
                  <p className="text-xs text-muted-foreground">{client.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
        >
          <motion.div
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-muted-foreground">Successful Projects Delivered</p>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction Rate</p>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-muted-foreground">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-white border border-gray-200 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Why Clients Trust Us</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business value. Our clients trust us because we don't just build products—we build long-term partnerships focused on measurable growth and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🎯", title: "Tailored Solutions", desc: "Custom strategies designed for your unique business needs" },
              { emoji: "⚡", title: "Fast Execution", desc: "Rapid development without compromising on quality" },
              { emoji: "🔒", title: "Full Support", desc: "Ongoing maintenance and optimization for long-term success" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
