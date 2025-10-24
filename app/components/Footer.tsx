import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section: navigation + contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-500">Accueil</a>
              </li>
              <li>
                <a href="/appartements" className="hover:text-yellow-500">Appartements</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">Contact</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">À propos</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p>123 Rue Exemple, Yaoundé, Cameroun</p>
            <p>Email: contact@laminutdecode.com</p>
            <p>Téléphone: +237 123 456 789</p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-white font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 La Minute De Code. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
