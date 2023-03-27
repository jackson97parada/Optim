import project from "/picture-project.jpg";
import { projectsData } from "./ProjectsData";
import { Project } from "./Project";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const projectsDetail = {
  image: project,
  title: "Conoce más de nuestros proyectos",
  description:
    "Nuestra experiencia abarca proyectos de gestión ambiental y social en diferentes sectores productivos, con un rango de clientes que incluye empresas, entidades del gobierno y organizaciones tales como CEMEX, BUNGE, CCX, INDUPALMA, Gas Natural, Coca-Cola FEMSA, EPM, ECOPETROL, MPX, ASOCARS, ASHMORE, BID, USAID, y los Ministerios del Ambiente, Cultura y Minas entre otras.",
};

function ProjectDetail() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="font-poppins lg:pt-4 pb-16 lg:pb-32 container w-full max-w-[1280px] mx-auto">
      <header className="flex justify-center lg:justify-start items-center shadow-shadowHeader lg:rounded-[110px] mx-auto lg:mt-0 lg:h-[590px] w-full lg:w-[1260px]">
        <img
          className="hidden lg:flex lg:rounded-[110px] h-[583px] object-cover pt-32 lg:pt-0 lg:h-auto"
          src={projectsDetail.image}
        />
        <h1 className="text-6xl md:text-8xl lg:text-7xl lg:text-white font-bold md:font-semibold lg:font-extrabold top-44 md:top-48 lg:top-auto md:bottom-[80%] lg:bottom-auto md:pt-0 pl-0 lg:pl-20 absolute">
          Proyectos
        </h1>
      </header>
      <div className="px-6 lg:px-0 lg:pl-6 lg:pr-3 pb-20">
        <h1 className="hidden lg:flex text-5xl pl-16 font-semibold py-16 w-[65%] leading-[60px]">
          {projectsDetail.title}
        </h1>
        <p className="hidden lg:flex text-[19px] lg:text-[22px] tracking-tighter md:tracking-[-1.7px] text-justify pt-20 lg:pt-0 pb-12 leading-tight whitespace-pre-line">
          {projectsDetail.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-28 md:pt-44 lg:pt-0 gap-4 gap-y-16 lg:gap-y-44">
        {projectsData.map((project, i) => (
          <Project
            key={i}
            image={project.data.image}
            name={project.data.name}
            projectId={project.id}
            description={project.data.description}
          />
        ))}
      </div>
    </main>
  );
}

export default ProjectDetail;
