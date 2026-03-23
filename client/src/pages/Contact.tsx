import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact, type ContactFormData } from "@/hooks/use-contact";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceInterest: z.string().optional(),
});

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      serviceInterest: "consulting"
    },
  });

  const mutation = useSubmitContact();

  const SERVICE_LABELS: Record<string, string> = {
    web: "Web Development",
    mobile: "Mobile App",
    cloud: "Cloud Infrastructure",
    consulting: "Strategic Consulting",
  };

  const onSubmit = (data: ContactFormData) => {
    const lines = [
      `*New Enquiry from Eagle Groups Website*`,
      ``,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      data.phone ? `*Phone:* ${data.phone}` : null,
      data.company ? `*Company:* ${data.company}` : null,
      `*Service Interest:* ${SERVICE_LABELS[data.serviceInterest || "consulting"] ?? data.serviceInterest}`,
      ``,
      `*Message:*`,
      data.message,
    ].filter(Boolean).join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/919356048383?text=${encoded}`, "_blank");

    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Ready to start your transformation? Let's discuss your project." 
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <Card className="p-8 glass-card border-none">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Visit Us</h5>
                    <p className="text-muted-foreground text-sm">123 Tech Park, Cyber City,<br />Hyderabad, IN 500081</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Call Us</h5>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email Us</h5>
                    <p className="text-muted-foreground text-sm">hello@egalgroup.in</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Working Hours</h5>
                    <p className="text-muted-foreground text-sm">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 glass-card border-none">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-white border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="bg-white border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+91..." {...field} value={field.value || ""} className="bg-white border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd" {...field} value={field.value || ""} className="bg-white border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || "consulting"}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-border">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                            <SelectItem value="consulting">Strategic Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project requirements..." 
                            className="min-h-[150px] bg-white border-border" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold gap-2"
                    disabled={mutation.isPending}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
                      <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.648 4.886 1.88 7.01L2 30l7.19-1.857A13.93 13.93 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.456a11.39 11.39 0 01-5.812-1.598l-.416-.248-4.268 1.102 1.13-4.142-.272-.43a11.41 11.41 0 01-1.748-6.137c0-6.31 5.137-11.447 11.386-11.447 6.252 0 11.388 5.137 11.388 11.447 0 6.253-5.136 11.453-11.388 11.453zm6.26-8.572c-.344-.172-2.036-1.004-2.352-1.12-.314-.115-.543-.172-.772.173-.228.344-.884 1.12-1.083 1.35-.2.23-.4.258-.743.086-.345-.172-1.454-.536-2.77-1.71-1.024-.915-1.714-2.044-1.916-2.388-.2-.345-.022-.531.15-.702.154-.155.345-.402.517-.604.172-.2.23-.345.345-.573.115-.23.058-.43-.03-.604-.086-.172-.772-1.862-1.056-2.55-.28-.67-.563-.578-.773-.59l-.656-.01c-.23 0-.603.086-.918.43-.315.344-1.2 1.174-1.2 2.863s1.228 3.322 1.4 3.55c.172.23 2.416 3.69 5.856 5.173.819.354 1.458.564 1.956.722.822.26 1.571.224 2.163.136.66-.099 2.036-.832 2.322-1.636.287-.803.287-1.492.2-1.636-.085-.143-.313-.23-.657-.4z"/>
                    </svg>
                    {mutation.isPending ? "Sending..." : "Send via WhatsApp"}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
