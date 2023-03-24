import { Dropdown } from "flowbite-react";
import "flowbite";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav
      id="navbar"
      className="px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] md:h-28 z-50 shadow-shadowNavbar"
    >
      <div className="flex flex-wrap justify-between mx-auto max-w-[1300px]">
        <a href="/Optim/">
          <img src={logo} className="w-24 md:w-28 pb-6 pt-4" alt="" />
        </a>
        {/* MENU */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="p-2 pt-6 ml-3 text-sm text-gray-500 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg viewBox="0 0 100 80" width="25" height="20">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
        {/* ==== */}
        <ul
          id="navbar-default"
          className="md:flex mb-6 md:mb-0 gap-10 hidden text-[15px] w-full md:w-[90%] justify-between font-semibold items-center"
        >
          <div className="flex flex-wrap text-center md:text-start gap-4 md:gap-[100px] md:pl-20">
            <a
              className="hover:text-[#10454F] w-full md:w-auto hover:-translate-y-1 transition"
              href="/Optim/#home"
            >
              Inicio
            </a>
            <a
              href="/Optim/#services"
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="hover:text-[#10454F] w-full md:w-auto hover:-translate-y-1 transition"
              type="button"
            >
              Servicios
            </a>
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link to={"/Optim/services/1"} onClick={handleLinkClick}>
                    <a className="block text-justify py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Adaptación y mitigación del cambio climático
                    </a>
                  </Link>
                  <hr className="w-[82%] mx-auto" />
                </li>
                <li>
                  <Link to={"/Optim/services/2"} onClick={handleLinkClick}>
                    <a className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Operación de proyectos de cooperación internacional
                    </a>
                  </Link>
                  <hr className="w-[82%] mx-auto" />
                </li>
                <li>
                  <Link to={"/Optim/services/3"} onClick={handleLinkClick}>
                    <a className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Gestión ambiental y social de proyectos productivos
                    </a>
                  </Link>
                  <hr className="w-[82%] mx-auto" />
                </li>
                <li>
                  <Link to={"/Optim/services/4"} onClick={handleLinkClick}>
                    <a className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Desarrollo de políticas públicas
                    </a>
                  </Link>
                  <hr className="w-[82%] mx-auto" />
                </li>
              </ul>
            </div>
            <a
              className="hover:text-[#10454F] w-full md:w-auto hover:-translate-y-1 transition"
              href="/Optim/#enterprise"
            >
              Empresa
            </a>
            <a
              className="hover:text-[#10454F] w-full md:w-auto hover:-translate-y-1 transition"
              href="/Optim/#customer"
            >
              Clientes
            </a>
            <a
              className="hover:text-[#10454F] w-full md:w-auto hover:-translate-y-1 transition"
              href="/Optim/#projects"
            >
              Proyectos
            </a>
          </div>
          <a
            className="hidden md:flex py-2.5 px-[18px] bg-black hover:bg-[#10454F] transition text-white rounded-[55px] text-sm font-semibold w-auto"
            href="#contact"
          >
            Contacto
          </a>
        </ul>
      </div>
    </nav>
  );
}
