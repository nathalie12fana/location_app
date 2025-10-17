"use client"

import { Button } from '@/components/ui/button';
import { Bolt,User,X,Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

export const Navbar = () => {
    const[isOpen, setIsOpen]=useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    const menuItems = [
      {label:"Home", href:"/"},
      {label:"La villa", href:"/"},
      {label:"Offres", href:"/"},
      {label: "Contact", href:"/"},
    ]
  return (
    <nav className ='bg-gray-800 bg-opacity-75 fixed w-full z-10 top-0 left-0 flex items-center justify-between p-4'>
      <div className ="w-full">
        <div className ="flex item-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0  text-white">
            <Bolt />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              {menuItems.map((item, index)=>(
                <Link key={index} href={item.href} className="hover:text-yellow-500">
                   {item.label}
                </Link>
              ))}

            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/" className="text-white hover:text-yellow-500">
          <User size={20}/>
          </Link>
        </div>
         <div className='flex md:hidden'>
          <Button onClick={toggleMenu} className='bg-transparent shadow-none z-[50]'>
            {isOpen ?<X size={24}/> : <Menu size={24} />}
          </Button>
         </div>
        </div>
      </div>
      {isOpen &&(
        <div className="md:hidden absolute right-0 top-0 w-[300px] p-2 h-screen bg-gray-400
        text-white">
          <div className="flex flex-col space-y-4 px-2 pt-20">
                {menuItems.map((item, index)=>(
                <Link key={index} href={item.href} className="hover:text-yellow-500">
                   {item.label}
                </Link>
              ))}
          </div>

        </div>
      )}

    </nav>
  )
}
export default Navbar;

