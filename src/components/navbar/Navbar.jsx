export function Navbar() {
  return (
    <nav className="flex justify-between">
      <ul className="flex gap-20">
        <i>
          <a href="">Icon</a>
        </i>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#enterprise">Empresa</a>
        </li>
        <li>
          <a href="#customer">Clientes</a>
        </li>
      </ul>
      <button>
        <a href="#contact">Contact</a>
      </button>
    </nav>
  );
}
