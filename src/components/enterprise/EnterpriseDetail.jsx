import { enterpriseData } from "./Enterprise";
import { Partner } from "./Partner";
import userOne from "/user-one.jpeg";
import userTwo from "/user-two.jpeg";
import userThree from "/user-three.jpeg";
import userFour from "/user-four.jpeg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function EnterpriseDetail() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="scroll font-poppins md:pl-6 pb-20">
      <div className="pt-10 mx-6 md:mx-8 lg:mx-20">
        <h2 className="text-6xl md:text-7xl text-center lg:text-start font-semibold">
          {enterpriseData.name}
        </h2>
        <p className="mt-14 md:pl-4 lg:pl-0 mb-14 text-xl text-justify tracking-tight leading-tight md:w-[97%]">
          {enterpriseData.description}
        </p>
        <h2 className="text-[35px] text-center md:text-start font-semibold mb-12">
          {enterpriseData.partners}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-y-20 md:gap-y-32 md:px-10">
        <Partner
          image={userOne}
          name="Eduardo Uribe"
          description={
            "Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State University). Ha sido director de Sostenibilidad del Grupo Energía de Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de Política Ambiental del Departamento Nacional de Planeación (DNP), Viceministro del Medio Ambiente y Director del Departamento Técnico Administrativo del Medio Ambiente de Bogotá. Trabajó en la Universidad de los Andes como Coordinador del Programa de Economía Ambiental y Evaluación de Proyectos de la Facultad de Economía y como investigador del Centro de Estudios Económicos (CEDE); y fue director del Centro de Estudios Ganaderos y Agrícolas (CEGA)."
          }
        />
        <hr className="w-3/5 mx-auto border-black lg:hidden" />
        <Partner
          image={userThree}
          name="Santiago Arango"
          description={
            "Ingeniero Ambiental (Universidad de los Andes), con posgrado en Gerencia de Proyectos y Especialización en Análisis de Políticas Públicas (Universidad Nacional). He sido asesor del Ministerio de Ambiente y Desarrollo Sostenible de Parques Naturales Nacionales y de la Secretaría Distrital de Ambiente de Bogotá, cuenta con amplia experiencia en proyectos de mitigación y adaptación al cambio climático, evaluaciones ambientales de acuerdo a estándares de desempeño nacionales e internacionales, desarrollo de instrumentos de gestión ambiental y social y formulación y evaluación de políticas públicas ambientales para varias agencias estatales."
          }
        />
        <hr className="w-3/5 mx-auto border-black lg:hidden" />
        <Partner
          image={userTwo}
          name="Jaime Bermúdez"
          description={
            "Abogado (Universidad de los Andes), Ph.D. en Ciencia Política (Universidad de Oxford). Ha sido consultor privado en estrategia de comunicaciones, asesor de la Presidencia de la República, Embajador y Ministro de Relaciones Exteriores. Durante los últimos años se desempeñó como presidente de Lazard (Banco de inversión) en Colombia, miembro de varias juntas directivas, del Consejo Superior de la Universidad de los Andes y otras organizaciones sin ánimo de lucro."
          }
        />
        <hr className="w-3/5 mx-auto border-black lg:hidden" />
        <Partner
          image={userFour}
          name="Julián Páez"
          description={
            "Abogado (Universidad Pedagógica y Tecnológica de Colombia), especialista en Derecho Público (Universidad Nacional), Gestión Pública (Universidad de los Andes) y Maestrías en Gerencia y Práctica del desarrollo y Gerencia Ambiental (Universidad de los Andes), ha sido asesor de la Corte Constitucional, la Alcaldía Mayor de Bogotá, los Ministerio de Trabajo, Interior, Minas y Energía y en este último se desempeñó como Secretario General, Subdirector Administrativo y Financiero, jefe de Tecnologías de la Información y Comunicaciones, fue miembro de las juntas de Cedelca, Urrá y la Empresa Colombiana de Gas Ecogás."
          }
        />
      </div>
    </div>
  );
}

export default EnterpriseDetail;
