import { Partner } from "./Partner";
import userOne from "/user-one.jpeg";
import userTwo from "/user-two.jpeg";
import userThree from "/user-three.jpeg";
import userFour from "/user-four.jpeg";

export function Enterprise() {
  const enterpriseData = {
    name: "Empresa",
    description:
      "Optim, fundada en 2007, es una empresa dedicada al diseño y desarrollo de estrategias de gestión ambiental y de desarrollo sostenible para distintos sectores y proyectos empresariales y comunitarios. Cuenta con un equipo de profesionales con amplio rango de experiencia y formación que le permite atender el desarrollo de los proyectos que sus clientes le encomiendan.",
    partners: "Nuestros socios",
  };

  return (
    <div id="enterprise" className="pt-32 mx-6 md:mx-8 lg:mx-20">
      <h2 className="text-6xl md:text-7xl text-center lg:text-start font-semibold">
        {enterpriseData.name}
      </h2>
      <p className="mt-12 md:pl-4 lg:pl-0 mb-6 text-lg text-justify tracking-tighter leading-tight md:w-[97%]">
        {enterpriseData.description}
      </p>
      <h2 className="text-[35px] font-semibold mb-12 md:ml-4 lg:ml-8">
        {enterpriseData.partners}
      </h2>
      <div className="grid grid-cols-2 gap-y-20">
        <Partner image={userOne} name="Eduardo Uribe" />
        <Partner image={userTwo} name="Jaime Bermúdez" />
        <Partner image={userThree} name="Santiago Arango" />
        <Partner image={userFour} name="Julián Páez" />
      </div>
    </div>
  );
}
