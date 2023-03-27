import { projectsData } from "./ProjectsData";
import { Project } from "./Project";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProjectView() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { projectId } = useParams();

  const thisProject = projectsData.find(
    (project) => project.id === parseInt(projectId)
  );

  return (
    <main className="font-poppins lg:pt-4 pb-16 md:pb-32 container w-full max-w-[1280px] mx-auto">
      <header className="flex justify-center lg:justify-start items-center shadow-shadowHeader lg:rounded-[110px] mx-auto lg:mt-0 lg:h-[580px] w-full lg:w-[1260px]">
        <img
          className="lg:rounded-[110px] h-[583px] object-cover pt-32 lg:pt-0 lg:h-auto"
          src={thisProject.data.image}
        />
        <h1 className="text-[50px] md:text-6xl lg:text-7xl lg:text-white font-extrabold top-36 md:top-auto md:bottom-[80%] lg:bottom-auto md:pt-0 pl-0 lg:pl-20 absolute">
          Proyectos
        </h1>
        <h1 className="lg:hidden text-5xl md:text-6xl lg:text-[39px] md:left-12 lg:left-auto leading-snug text-center md:text-start font-extrabold pt-56 text-white py-16 md:w-[90%] lg:w-[65%] absolute">
          {thisProject.data.name}
        </h1>
      </header>
      <div className="px-6 lg:px-0 lg:pl-6 lg:pr-3 pb-20">
        <h1 className="hidden lg:flex text-5xl pl-10 font-semibold py-16 w-[65%] leading-[60px]">
          {thisProject.data.name}
        </h1>
        <p
          className="text-[19px] lg:text-[20px] tracking-tighter text-justify pt-20 lg:pt-0 pb-12 leading-tight whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: thisProject.data.description }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-28 md:pt-10 lg:pt-0 gap-4 gap-y-16 lg:gap-y-28">
        {projectsData.map((project, i) => (
          <Project
            key={i}
            image={project.data.image}
            name={project.data.name}
            projectId={project.id}
          />
        ))}
      </div>
    </main>
  );
}
