"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const apartments = [
  {
    id: 1,
    name: "Appartement Luxueux à Bonapriso",
    image: "/img11.png",
    price: "45 000 FCFA / nuit",
  },
  {
    id: 2,
    name: "Appartement Moderne à Bastos",
    image: "/img10.png",
    price: "60 000 FCFA / nuit",
  },
  {
    id: 3,
    name: "Appartement avec Vue Mer à Kribi",
    image: "/img5.png",
    price: "80 000 FCFA / nuit",
  },
  {
    id: 4,
    name: "Appartement avec Vue Mer à Kribi",
    image: "/img6.png",
    price: "70 000 FCFA / nuit",
  },
  {
    id: 5,
    name: "Appartement avec Vue Mer à Kribi",
    image: "/img2.png",
    price: "90 000 FCFA / nuit",
  },
  
  {
    id: 6,
    name: "Appartement avec Vue Mer à Kribi",
    image: "/img8.png",
    price: "50 000 FCFA / nuit",
  },
];

export default function AppartementPage() {
  const [current, setCurrent] = useState(0);

  // défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % apartments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? apartments.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % apartments.length);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Nos Appartements
      </h1>

      {/* === Carrousel principal === */}
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={apartments[current].image}
            alt={apartments[current].name}
            width={900}
            height={600}
            className="object-cover w-full h-[400px] transition-all duration-700"
          />
        </div>

        {/* Flèches de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700/70 text-white p-3 rounded-full hover:bg-gray-900"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700/70 text-white p-3 rounded-full hover:bg-gray-900"
        >
          <ChevronRight />
        </button>

        {/* Indicateurs */}
        <div className="flex justify-center mt-4 space-x-2">
          {apartments.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* === Liste d’appartements === */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
        {apartments.map((apt) => (
          <div
            key={apt.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src={apt.image}
              alt={apt.name}
              width={400}
              height={250}
              className="object-cover w-full h-[200px]"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {apt.name}
              </h2>
              <p className="text-gray-500">{apt.price}</p>

              <div className="mt-3 flex justify-between items-center">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Link href={`/reservation?name=${encodeURIComponent(apt.name)}`}>
                    Réserver
                  </Link>
                </Button>

                <Button variant="outline">Voir détails</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
