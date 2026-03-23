import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  serviceInterest?: string;
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Prepare form data for Netlify Forms
      const formData = new FormData();
      formData.append("form-name", "contact");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("company", data.company || "");
      formData.append("message", data.message);
      formData.append("serviceInterest", data.serviceInterest || "");

      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }
      
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });
}
