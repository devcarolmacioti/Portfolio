import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(1, "Mensagem é obrigatória")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // or send an email. For this example, we'll just log it.
      console.log("Contact form submission:", contactData);
      
      // Return success
      res.status(200).json({ 
        success: true, 
        message: "Mensagem recebida com sucesso!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation error
        return res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      }
      
      // Generic error
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro ao processar sua mensagem. Tente novamente mais tarde." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
