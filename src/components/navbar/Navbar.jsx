import React, { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`px-10 fixed top-0 right-0 bg-white w-full h-28 flex items-center z-50 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <ul className="flex w-[90%] gap-24">
        <i>
          <a href="">Icon</a>
        </i>
        <li>
          <a className="text-sm font-medium" href="#home">
            Inicio
          </a>
        </li>
        <li>
          <a className="text-sm font-medium" href="#services">
            Servicios
          </a>
        </li>
        <li>
          <a className="text-sm font-medium" href="#enterprise">
            Empresa
          </a>
        </li>
        <li>
          <a className="text-sm font-medium" href="#customer">
            Clientes
          </a>
        </li>
        <li>
          <a className="text-sm font-medium" href="#projects">
            Proyectos
          </a>
        </li>
      </ul>
      <a
        className="py-2.5 px-[18px] bg-black text-white rounded-[55px] text-sm font-semibold w-auto"
        href="#contact"
      >
        Contacto
      </a>
    </nav>
  );
}
