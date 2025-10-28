import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: validationError.toString(),
        });
      }

      // Create contact submission
      const contact = await storage.createContact(result.data);

      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        contact,
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      return res.status(500).json({
        error: "Failed to submit contact form",
      });
    }
  });

  // Get all contacts (for potential admin view)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      return res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        error: "Failed to fetch contacts",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
