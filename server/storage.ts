import { type User, type InsertUser, type Contact, type InsertContact, users, contacts } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContact(id: string): Promise<Contact | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contactData = {
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone || null,
      eventType: insertContact.eventType || null,
      message: insertContact.message,
    };
    
    const [contact] = await db.insert(contacts).values(contactData).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    const allContacts = await db.select().from(contacts).orderBy(contacts.createdAt);
    return allContacts.reverse(); // Most recent first
  }

  async getContact(id: string): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }
}

export const storage = new DatabaseStorage();
