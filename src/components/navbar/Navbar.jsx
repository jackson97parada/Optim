import logo from "../../../public/logo.png";

export function Navbar() {
  return (
    <nav
      id="navbar"
      className="px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] max-w-[1370px] mx-auto h-28 flex justify-between items-center z-50 shadow-shadowNavbar"
    >
      <ul className="flex w-[90%] gap-[100px] pt-4 text-[15px] font-semibold items-center">
        <a href="/">
          <img src={logo} className="w-28 pb-6" alt="" />
        </a>
        <a href="/#home">Inicio</a>
        <a href="/#services" id="dropdownService" data-dropdown-trigger="hover">
          Servicios
        </a>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownService"
          >
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
            <li>
              <a href="#">Service 4</a>
            </li>
          </ul>
        </div>
        <a href="/#enterprise">Empresa</a>
        <a href="/#customer">Clientes</a>
        <a href="/#projects">Proyectos</a>
      </ul>
      <a
        className="mt-4 py-2.5 px-[18px] bg-black text-white rounded-[55px] text-sm font-semibold w-auto"
        href="#contact"
      >
        Contacto
      </a>
    </nav>
  );
}
