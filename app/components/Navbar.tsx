"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bolt, User, X, Menu } from "lucide-react";
import {
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "La villa", href: "/villa" },
    { label: "Offres", href: "/offres" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 bg-opacity-75 fixed w-full z-10 top-0 left-0 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo + liens desktop */}
        <div className="flex items-center">
          <div className="flex-shrink-0 text-yellow-500 flex items-center gap-2">
            <Bolt className="w-6 h-6" />
            <span className="text-lg font-semibold">Villa Lux</span>
          </div>

          {/* Liens desktop */}
          <div className="hidden md:flex ml-10 space-x-6 text-white">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-yellow-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Utilisateur desktop */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" className="text-white border-gray-400 hover:bg-gray-700">
                Se connecter
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Bouton mobile */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={toggleMenu}
            variant="ghost"
            className="text-white hover:bg-gray-700 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-0 w-[300px] h-screen bg-gray-900 bg-opacity-95 text-white flex flex-col p-6 space-y-6 z-40 transition-transform duration-300">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-bold">Menu</h3>
            <Button
              onClick={toggleMenu}
              variant="ghost"
              className="text-white hover:text-yellow-500 p-2"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Liens mobile */}
          <div className="flex flex-col space-y-4 mt-4">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors text-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-700 w-full my-4" />

          {/* Utilisateur mobile */}
          <div className="space-y-4 w-full">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Se connecter
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
