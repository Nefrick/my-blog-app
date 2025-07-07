import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-8 h-8 rounded-lg"
          w={32}
          h={32}
        />
        <span>Nefrick Blog</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)} className="text-4xl">
          {isOpen ? "X" : "☰"}
        </button>
        {/* Mobile Menu Items */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium absolute top-16 transition-all ease-in-out  ${
            isOpen ? "-right-0" : "-right-[100%]"
          } bg-main`}
        >
          <ul className="flex flex-col md:hidden items-center justify-center gap-8 xl:gap-12 font-medium">
            <li>
              <Link to="/" className="text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/posts" className="text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-lg">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-lg">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex md:flex items-center justify-center gap-8 xl:gap-12 font-medium">
          <li>
            <Link to="/" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/posts" className="text-lg">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg">
              Contact
            </Link>
          </li>
          <li>
            <SignedOut>
              <Link to="/login" className="text-lg">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                  Login
                </button>
              </Link>
            </SignedOut>
          </li>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
