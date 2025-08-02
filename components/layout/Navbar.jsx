import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { CiDumbbell } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full h-20 font-mono">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="custom-gradient rounded-full p-1">
            <CiDumbbell className="text-3xl text-white group-hover:animate-spin" />
          </div>
          <span className="text-2xl font-bold tracking-wide">Fitness</span>
        </Link>

        {/* Nav */}
        <div className="hidden md:flex items-center justify-between gap-4 bg-card px-8 py-4 rounded-xl max-w-xl w-full">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
              {/* Add dot between links, but not after the last one */}
              {index < navLinks.length - 1 && (
                <span className="w-2 h-2 custom-gradient-dot rounded-full"></span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button className="custom-gradient text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
