import logo from "../../../public/logo.png";

export function Navbar() {
  return (
    <nav
      id="navbar"
      className="px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] max-w-[1370px] mx-auto h-28 flex justify-between items-center z-50 shadow-lg"
    >
      <ul className="flex w-[90%] gap-[100px] pt-8 text-[15px] font-semibold items-center">
        <a href="#">
          <img src={logo} className="w-28 pb-8" alt="" />
        </a>
        <a href="#home">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#enterprise">Empresa</a>
        <a href="#customer">Clientes</a>
        <a href="#projects">Proyectos</a>
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
