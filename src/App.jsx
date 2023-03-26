import { Routes, Route } from "react-router-dom";
import ServiceDetail from "./components/service/ServiceDetail";
import EnterpriseDetail from "./components/enterprise/EnterpriseDetail";
import LandingPages from "./components/pages";

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
      </Routes>
    </div>
  );
}

// TASK TO REALIZE

// ACOMODAR LOS TEXTOS PARA QUE NO QUEDE EL ESPACIADO
// ACOMODAR LAS IMAGENES PARA QUE NO SE VEAN APRETADAS
// ACOMODAR EL SLIDE PARA QUE OCUPE TODO EL ANCHO Y QUE QUEDE UN POCO MAS POR FUERA EL SEGUNDO
// CREAR O REUTILIZAR EL COMPONENTE DE EMPRESA
// HACER EL RESPONSIVE DE EMPRESA
// CREAR LA VISTA DE PROYECTOS
// HACER EL RESPONSIVE DE PROYECTOS
// TRATAR DE ACOMODAR LOS DOTS DEL CAROUSEL
// TRATAR DE AÑADIR LA VENTANA DE WHATSAPP
// ARREGLAR EL TAMAÑO DE LOS LOGOS CLIENTES
// VERIFICAR PORQUE CUANDO ENTRO A UN SERVICIO NO ME DESPLIEGA DESPUES EL MENU
