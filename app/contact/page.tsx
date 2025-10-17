"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Ici tu peux connecter EmailJS ou ton API
    console.log("Formulaire envoyé :", form);

    emailjs
  .send(
    "service_4dn9zi7",      // Ton ID de service EmailJS
    "template_17jgf8n",     // Ton ID de template EmailJS
    form,
    "IOCIXn56nEQi48M1v"       // Ta clé publique EmailJS
  )
  .then(() => {
    setIsSent(true);
  })
  .catch((error) => console.error("Erreur EmailJS:", error));

    // Simulation d’envoi réussi
    setIsSent(true);
    setForm({ name: "", email: "", message: "" });

    // Après 3 secondes, on masque la confirmation
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Contactez-nous
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
        Vous avez une question ou souhaitez réserver ? Remplissez le formulaire ci-dessous 📩
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Nom complet</label>
          <Input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Adresse email</label>
          <Input
            type="email"
            name="email"
            placeholder="votre@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <Textarea
            name="message"
            rows={5}
            placeholder="Écrivez votre message ici..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
        >
          <Send className="w-4 h-4" />
          Envoyer le message
        </Button>
      </form>

      {isSent && (
        <p className="text-green-600 text-center mt-6 font-medium">
          ✅ Votre message a été envoyé avec succès !
        </p>
      )}
    </section>
  );
}
