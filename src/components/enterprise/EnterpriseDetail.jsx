import { Enterprise } from "./Enterprise";
import { Navbar } from "../navbar/Navbar";
import { Partner } from "./Partner";

function EnterpriseDetail() {
  return (
    <div className="scroll font-poppins ml-16">
      <Navbar />
      <Enterprise>
        <Partner
          description={
            "Ingeniero Agrónomo, M.Sc. en Química de Suelos (Virginia Tech.) y Ph.D. en Fertilidad de Suelos Tropicales (North Carolina State University). Ha sido director de Sostenibilidad del Grupo Energía de Bogotá, Vicepresidente de Sostenibilidad de Ecopetrol, Director de Política Ambiental del Departamento Nacional de Planeación (DNP), Viceministro del Medio Ambiente y Director del Departamento Técnico Administrativo del Medio Ambiente de Bogotá. Trabajó en la Universidad de los Andes como Coordinador del Programa de Economía Ambiental y Evaluación de Proyectos de la Facultad de Economía y como investigador del Centro de Estudios Económicos (CEDE); y fue director del Centro de Estudios Ganaderos y Agrícolas (CEGA)."
          }
        />
      </Enterprise>
    </div>
  );
}

export default EnterpriseDetail;
