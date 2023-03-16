import pictureOne from "/picture-one-home.png";
import pictureTwo from "/picture-two-home.png";
import pictureThree from "/picture-three-home.png";

export function Home() {
  return (
    <div id="home" className="flex flex-wrap gap-10">
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
        <img className="w-60 h-80 rounded-xl" src={pictureOne} alt="" />
        <img className="w-60 h-80 rounded-xl" src={pictureTwo} alt="" />
        <img className="w-60 h-80 rounded-xl" src={pictureThree} alt="" />
      </div>
    </div>
  );
}
