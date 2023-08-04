import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          {/* Replace this link with your company logo */}
          <Link href="/">
            <div className="text-white text-xl font-bold">Protosharp Industries</div>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {/* Replace these links with your actual navigation links */}
          <Link href="/">
            <div className="text-white hover:underline">Home</div>
          </Link>
          <Link href="/about">
            <div className="text-white hover:underline">About</div>
          </Link>
          <Link href="/services">
            <div className="text-white hover:underline">Services</div>
          </Link>
          <Link href="/contact">
            <div className="text-white hover:underline">Contact</div>
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {/* Responsive mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            {/* Replace these links with your actual navigation links */}
            <Link href="/">
              <a className="text-white hover:underline">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white hover:underline">About</a>
            </Link>
            <Link href="/services">
              <a className="text-white hover:underline">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:underline">Contact</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
