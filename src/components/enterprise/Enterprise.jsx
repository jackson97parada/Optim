import { Partner } from "./Partner";

export function Enterprise() {
  return (
    <div id="enterprise">
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
      {/* Components */}
      <div className="grid grid-cols-2">
        <Partner image="../../../dist/user-one.jpeg" name="Eduardo Uribe" />
        <Partner image="../../../dist/user-two.jpeg" name="Jaime Bermúdez" />
        <Partner image="../../../dist/user-two.jpeg" name="Santiago Arango" />
        <Partner image="../../../dist/user-one.jpeg" name="Julián Páez" />
      </div>
    </div>
  );
}
