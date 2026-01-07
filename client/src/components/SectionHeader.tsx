import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
