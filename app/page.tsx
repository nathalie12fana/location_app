"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Header } from "../components/Header";
import Galerie from "../components/Galerie";
import VillaInfos from "../components/VillaInfos";
import Reservation from "../components/reservation";
;

export default function HomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Invité";
  return (
   <>
     <Header/>
     <Galerie/>
     <VillaInfos
        surface={120}
        bedrooms={6}
        bathrooms={6}
        hasPool={true}
        haskitchen={true} 
     />
     <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur Location App</h1>
      <p>Bonjour, {name} !</p>
      <Reservation />
    </main>
     

   </>
  );
}
