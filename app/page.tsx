import Image from "next/image";
import { Header } from "./components/Header";
import Galerie from "./components/Galerie";
import VillaInfos from "./components/VillaInfos";
import Reservation from "./components/reservation";
;

export default function Home() {
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
     <Reservation/> 
     

   </>
  );
}
