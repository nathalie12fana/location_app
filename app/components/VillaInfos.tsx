"use client"
import React, {FC} from 'react'
import {CookingPot, Waves, Bath, Bed, Square} from "lucide-react"

interface VillaInfosProps {
    surface:number,
    bedrooms:number,
    bathrooms:number,
    hasPool:boolean,
    haskitchen:boolean,
}

const VillaInfos: FC<VillaInfosProps>=({
    surface,bedrooms,bathrooms,hasPool,haskitchen

}) =>{
    return(
     <div className="max-w-[800px] mx-auto p-6 bg-white shadow-lg rounded-md">
         <h2 className="text-2xl font-semibold mb-4">Informations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                    {hasPool && <Waves className="text-blue-500"/>}
                    <span className="text-lg font-medium">Piscine</span>
                </div>

                <div className="flex items-center space-x-2">
                    {haskitchen && <CookingPot  className='text-green-500'/>}
                    <span className="text-lg font-medium">Cuisine amenagee</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Bath  className="text-purple-500"/>
                    <span className="text-lg font-medium">{bathrooms} salle(s) de bain</span>
                </div>
                  <div className="flex items-center space-x-2">
                    <Bed  className="text-yellow-500"/>
                    <span className="text-lg font-medium">{bedrooms} chambre(s)</span>
                </div> 

                <div className="flex items-center space-x-2">
                    <Square  className="text-gray-500"/>
                    <span className="text-lg font-medium">{surface} m</span>
                </div>                    

            </div>
            <p className='mt-6'>Lorem ipsum dolor
                    sit amet consectetur adipisicing elit.
                    Eligendi similique quod aliquam itaque, maxime temporibus,
                    incidunt repellat doloribus error molestiae id,
                    aperiam ratione quos blanditiis
                    aliquid veniam recusandae. Porro, expedita Eligendi similique quod aliquam itaque, maxime
                    temporibus,
                    incidunt repellat doloribus error molestiae id,
                    aperiam ratione quos blanditiis
                    aliquid veniam recusandae. Porro, expedita.</p>


     </div>
    )
}
export default VillaInfos
