import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Service } from "./components/service/Service";
import { Enterprise } from "./components/enterprise/Enterprise";
import { Customer } from "./components/customer/Customer";
import { Contact } from "./components/contact/Contact";

export default function App() {
  return (
    <div className="font-poppins pt-32 container w-full max-w-[1280px] mx-auto">
      <Navbar />
      <Header />
      <Home />
      <Service />
      <Enterprise />
      <Customer />
      <Contact />
    </div>
  );
}

// import { Routes, Route, Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="optim" element={<Optim />} />
//           <Route path="home" element={<Home />} />
//           <Route path="services" element={<Service />} />
//           <Route path="enterprise" element={<Enterprise />} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div className="p-10 container w-full max-w-1200 mx-auto px-5">
//       <nav className="flex justify-between mb-10">
//         <ul className="flex gap-20">
//           <li>
//             <Link to="/optim">OPTIM</Link>
//           </li>
//           <li>
//             <Link to="/home">Inicio</Link>
//           </li>
//           <li>
//             <Link to="/services">Servicios</Link>
//           </li>
//           <li>
//             <Link to="/enterprise">Empresa</Link>
//           </li>
//           <li>
//             <Link to="/customers">Clientes</Link>
//           </li>
//         </ul>
//         <button className="bg-black text-white py-2 px-4 rounded-3xl hover:bg-sky-900">
//           <Link to="/contact">Contacto</Link>
//         </button>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
