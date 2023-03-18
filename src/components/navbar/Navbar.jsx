import { useNavbarScroll } from "./useNavbarScroll";
import logo from "../../../public/logo.png";

export function Navbar() {
  const scrolled = useNavbarScroll();

  return (
    <nav
      id="navbar"
      className={`px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] max-w-[1370px] mx-auto h-28 flex justify-between items-center z-50 shadow-lg`}
    >
      <ul className="flex w-[90%] gap-[100px] items-center">
        <i>
          <a href="">
            <img src={logo} className="w-28" alt="" />
          </a>
        </i>
        <li className="pt-8">
          <a className="text-sm font-medium" href="#home">
            Inicio
          </a>
        </li>
        <li className="pt-8">
          <a className="text-sm font-medium" href="#services">
            Servicios
          </a>
        </li>
        <li className="pt-8">
          <a className="text-sm font-medium" href="#enterprise">
            Empresa
          </a>
        </li>
        <li className="pt-8">
          <a className="text-sm font-medium" href="#customer">
            Clientes
          </a>
        </li>
        <li className="pt-8">
          <a className="text-sm font-medium" href="#projects">
            Proyectos
          </a>
        </li>
      </ul>
      <a
        className="mt-8 py-2.5 px-[18px] bg-black text-white rounded-[55px] text-sm font-semibold w-auto"
        href="#contact"
      >
        Contacto
      </a>
    </nav>
  );
}
