import { Button } from '@/components/ui/button';
import React from 'react'

export const Header = () => {
  return (
    <header className="relative h-sreen flex items-center justify-center bg-fixed bg-center 
    bg-cover h-screen"  style={{backgroundImage:`url('/img1.png')
    `}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Villa LoveDream
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white">
                voyagez vers une destination de reve.
            </p>
            <Button className="bg-yellow-500 text-write px-6 py-3 rounded-full 
            font-semibold animate-pulse">
                Reserver maintenant
            </Button>
        </div>

    </header>
  )
}
export default Header;
