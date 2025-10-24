"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Reservation() {
  const searchParams = useSearchParams();
  const apartmentName = searchParams.get("name") || "Appartement";

  const [reservation, setReservation] = useState({
    nom: "",
    arrivee: "",
    depart: "",
  });

  const handleReserve = () => {
    if (!reservation.nom || !reservation.arrivee || !reservation.depart) {
      alert("❗ Veuillez remplir tous les champs avant de confirmer.");
      return;
    }

    alert(
      `✅ Réservation confirmée pour ${reservation.nom}\n\n` +
      `Logement : ${apartmentName}\n` +
      `Arrivée : ${reservation.arrivee}\n` +
      `Départ : ${reservation.depart}`
    );

    setReservation({ nom: "", arrivee: "", depart: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Réserver : <span className="text-yellow-600">{apartmentName}</span>
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Nom complet
            </label>
            <input
              type="text"
              value={reservation.nom}
              onChange={(e) =>
                setReservation({ ...reservation, nom: e.target.value })
              }
              className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Ex : Nathalie Christelle"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Date d’arrivée
              </label>
              <input
                type="date"
                value={reservation.arrivee}
                onChange={(e) =>
                  setReservation({ ...reservation, arrivee: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black  focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Date de départ
              </label>
              <input
                type="date"
                value={reservation.depart}
                onChange={(e) =>
                  setReservation({ ...reservation, depart: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
          </div>

          <Button
            onClick={handleReserve}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold mt-4"
          >
            Confirmer la réservation
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full mt-2"
          >
            Annuler
          </Button>
        </div>
      </div>
    </div>
  );
}
