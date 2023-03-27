import { Routes, Route } from "react-router-dom";
import ServiceDetail from "./components/service/ServiceDetail";
import EnterpriseDetail from "./components/enterprise/EnterpriseDetail";
import LandingPages from "./components/pages";
import ProjectDetail from "./components/project/ProjectDetail";
import ProjectView from "./components/project/ProjectView";

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins pt-28 md:pt-32 container min-w-[300px] w-auto md:w-full max-w-[1280px] md:mx-auto">
      <Routes>
        <Route path="/Optim" element={<LandingPages />} />
        <Route path="/Optim/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/Optim/enterpriseDetail" element={<EnterpriseDetail />} />
        <Route path="/Optim/projects" element={<ProjectDetail />} />
        <Route path="/Optim/projects/:projectId" element={<ProjectView />} />
      </Routes>
    </div>
  );
}

// TASK TO REALIZE

// EN MOBIL NO ME FUNCIONA EL DESPLEGABLE
// AGREGAR EL SCROLL
// ARREGLAR EL TAMAÑO DE LOS LOGOS CLIENTES

// TRATAR DE ACOMODAR LOS DOTS DEL CAROUSEL
// TRATAR DE AÑADIR LA VENTANA DE WHATSAPP
// VERIFICAR PORQUE CUANDO ENTRO A UN SERVICIO NO ME DESPLIEGA DESPUES EL MENU
