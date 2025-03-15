import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/aboutus", text: "About" },
    { to: "/counter", text: "counter" },
  ];

  return (
    <>
      <nav className="bg-gray-100 p-4">
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.to} className="text-blue-500 hover:underline">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      ;
    </>
  );
};

export default Navbar;
