import { Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { HeaderHome } from "../header/HeaderHome";

export function Navbar() {
  return (
    <nav className="flex justify-between">
      <ul className="flex gap-20">
        <i></i>
        <li></li>
        <li>
          <a href="/Optim/Services">Servicios</a>
        </li>
        <li>
          <a href="/Optim/Enterprise">Empresa</a>
        </li>
        <li>
          <a href="/Optim/Customer">Clientes</a>
        </li>
      </ul>

      <button>Contacto</button>
    </nav>
  );
}
