import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
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

  const onSubmit = (data: InsertContact) => {
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
                    <p className="text-muted-foreground text-sm">+919356048383</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email Us</h5>
                    <p className="text-muted-foreground text-sm">egalgroup36@gmail.com</p>
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
                            <Input placeholder="John Doe" {...field} className="bg-secondary/50 border-white/10" />
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
                            <Input placeholder="john@company.com" {...field} className="bg-secondary/50 border-white/10" />
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
                            <Input placeholder="+91..." {...field} value={field.value || ""} className="bg-secondary/50 border-white/10" />
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
                            <Input placeholder="Your Company Ltd" {...field} value={field.value || ""} className="bg-secondary/50 border-white/10" />
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
                            <SelectTrigger className="bg-secondary/50 border-white/10">
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
                            className="min-h-[150px] bg-secondary/50 border-white/10" 
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
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
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
