import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="optim" element={<Optim />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Service />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="customers" element={<Customers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="p-10">
      <nav className="flex justify-between mb-10">
        <ul className="flex gap-20">
          <li>
            <Link to="/optim">OPTIM</Link>
          </li>
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/services">Servicios</Link>
          </li>
          <li>
            <Link to="/enterprise">Empresa</Link>
          </li>
          <li>
            <Link to="/customers">Clientes</Link>
          </li>
        </ul>
        <button className="bg-black text-white py-2 px-4 rounded-3xl hover:bg-sky-900">
          <Link to="/contact">Contacto</Link>
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

function Optim() {
  return (
    <header className="flex bg-bgHeader rounded-[80px] h-screen bg-cover">
      <div className="flex flex-wrap justify-center self-center center">
        <h2 className="text-white text-4xl">Optim consult sas</h2>
        <h1 className="text-white text-[60px] font-bold">
          Consultoría Socio Ambiental Estratégica
        </h1>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="w-2/6">
        <h1 className="text-7xl font-bold mb-20">¿Qué hacemos?</h1>
        <p className="mb-10">
          Ofrecemos servicios de consultoría para la gestión ambiental y social
          de los sectores productivos. Hemos desarrollado proyectos para los
          sectores agropecuario, pesquero, agroindustrial, forestal, transporte,
          infraestructura, alimentos y bebidas, y construcción de vivienda a
          nivel nacional e internacional.
        </p>
        <p>
          Nuestro propósito es optimizar y fortalecer organizaciones públicas,
          privadas y de cooperacion internacional para desarrollar estrategias
          sostenibles que contribuyan a la generación de bienestar social y a la
          prosperidad económica.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-60 h-80 rounded-xl"
          src="/picture-one-home.png"
          alt=""
        />
        <img
          className="w-60 h-80 rounded-xl"
          src="/picture-two-home.png"
          alt=""
        />
        <img
          className="w-60 h-80 rounded-xl"
          src="/picture-three-home.png"
          alt=""
        />
      </div>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h2 className="text-7xl font-bold">Servicios</h2>
    </div>
  );
}

function Enterprise() {
  return (
    <div className="p-20">
      <h2 className="text-7xl font-bold">Empresa</h2>
      <p className="my-14">
        Optim, fundada en 2007, es una empresa dedicada al diseño y desarrollo
        de estrategias de gestión ambiental y de desarrollo sostenible para
        distintos sectores y proyectos empresariales y comunitarios. Cuenta con
        un equipo de profesionales con amplio rango de experiencia y formación
        que le permite atender el desarrollo de los proyectos que sus clientes
        le encomiendan.
      </p>
      <h2 className="text-3xl font-semibold mb-20">Nuestros Socios</h2>
      <div className="flex gap-6 ">
        <div className="space-y-4">
          <img
            className="w-20 h-50 rounded-full mx-auto"
            src="/user-one.jpeg"
            alt=""
          />
          <h1 className="text-xl text-center font-bold">Eduardo Uribe</h1>
          <p>
            Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y
            Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State
            University). Ha sido director de Sostenibilidad del Grupo Energía de
            Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de
            Política Ambiental del Departamento Nacional de Planeación (DNP),
            Viceministro del Medio Ambiente y Director del Departamento Técnico
            Administrativo del Medio Ambiente de Bogotá. Trabajó en la
            Universidad de los Andes como Coordinador del Programa de Economía
            Ambiental y Evaluación de Proyectos de la Facultad de Economía y
            como investigador del Centro de Estudios Económicos (CEDE); y fue
            director del Centro de Estudios
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-20 h-50 rounded-full mx-auto"
            src="/user-two.jpeg"
            alt=""
          />
          <h1 className="text-xl text-center font-bold">Eduardo Uribe</h1>
          <p>
            Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y
            Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State
            University). Ha sido director de Sostenibilidad del Grupo Energía de
            Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de
            Política Ambiental del Departamento Nacional de Planeación (DNP),
            Viceministro del Medio Ambiente y Director del Departamento Técnico
            Administrativo del Medio Ambiente de Bogotá. Trabajó en la
            Universidad de los Andes como Coordinador del Programa de Economía
            Ambiental y Evaluación de Proyectos de la Facultad de Economía y
            como investigador del Centro de Estudios Económicos (CEDE); y fue
            director del Centro de Estudios
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-20 h-50 rounded-full mx-auto"
            src="/user-one.jpeg"
            alt=""
          />
          <h1 className="text-xl text-center font-bold">Eduardo Uribe</h1>
          <p>
            Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y
            Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State
            University). Ha sido director de Sostenibilidad del Grupo Energía de
            Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de
            Política Ambiental del Departamento Nacional de Planeación (DNP),
            Viceministro del Medio Ambiente y Director del Departamento Técnico
            Administrativo del Medio Ambiente de Bogotá. Trabajó en la
            Universidad de los Andes como Coordinador del Programa de Economía
            Ambiental y Evaluación de Proyectos de la Facultad de Economía y
            como investigador del Centro de Estudios Económicos (CEDE); y fue
            director del Centro de Estudios
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-20 h-50 rounded-full mx-auto"
            src="/user-two.jpeg"
            alt=""
          />
          <h1 className="text-xl text-center font-bold">Eduardo Uribe</h1>
          <p>
            Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y
            Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State
            University). Ha sido director de Sostenibilidad del Grupo Energía de
            Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de
            Política Ambiental del Departamento Nacional de Planeación (DNP),
            Viceministro del Medio Ambiente y Director del Departamento Técnico
            Administrativo del Medio Ambiente de Bogotá. Trabajó en la
            Universidad de los Andes como Coordinador del Programa de Economía
            Ambiental y Evaluación de Proyectos de la Facultad de Economía y
            como investigador del Centro de Estudios Económicos (CEDE); y fue
            director del Centro de Estudios
          </p>
        </div>
      </div>
    </div>
  );
}

function Customers() {
  return (
    <div className="p-20 w-3/5">
      <h2 className="text-7xl font-bold">Nuestros Clientes</h2>
      <p className="pt-10">
        Nuestra experiencia abarca proyectos de gestión ambiental y social en
        diferentes sectores productivos, con un rango de clientes que incluye a
        las empresas, entidades del gobierno y organizaciones mas importantes de
        colombia y america latina
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-7xl font-bold">Contáctanos</h2>
    </div>
  );
}
