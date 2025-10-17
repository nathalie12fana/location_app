"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    if (!form.name || !form.email || !form.message) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    setStatus("loading");

    const SERVICE_ID = "service_4dn9zi7";
    const TEMPLATE_ID = "template_17jgf8n";
    const PUBLIC_KEY = "IOCIXn56nEQi48M1v";

    emailjs.init(PUBLIC_KEY);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contactez-nous
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Nom complet</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <Textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className={`w-full text-white transition-all ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Envoi en cours..."
            : status === "success"
            ? "✅ Envoyé !"
            : status === "error"
            ? "❌ Erreur"
            : "Envoyer le message"}
        </Button>
      </form>
    </section>
  );
}
