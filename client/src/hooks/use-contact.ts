import { useMutation } from "@tanstack/react-query";
import { api, type InsertContact } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to submit contact form");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
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
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
