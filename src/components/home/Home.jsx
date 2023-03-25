import pictureOne from "/picture-one-home.jpg";
import pictureTwo from "/picture-two-home.jpg";
import pictureThree from "/picture-three-home.jpg";

export function Home() {
  const homeData = {
    title: "¿Qué hacemos?",
    descriptionOne:
      "Ofrecemos servicios de consultoría para la gestión ambiental y social de los sectores productivos. Hemos desarrollado proyectos para los sectores agropecuario, pesquero, agroindustrial, forestal, transporte, infraestructura, alimentos y bebidas, y construcción de vivienda a nivel nacional e internacional.",
    descriptionTwo:
      "Nuestro propósito es optimizar y fortalecer organizaciones públicas, privadas y de cooperacion internacional para desarrollar estrategias sostenibles que contribuyan a la generación de bienestar social y a la prosperidad económica.",
  };
  return (
    <div
      id="home"
      className="flex flex-wrap pt-32 lg:pt-40 mx-6 lg:mx-20 gap-52"
    >
      <div className="w-full lg:w-2/6">
        <h1 className="text-6xl md:text-7xl md:w-2/4 lg:w-auto md:mx-auto font-semibold mb-12">
          {homeData.title}
        </h1>
        <p className="mb-10 md:mx-6 lg:mx-0 text-justify leading-5">
          {homeData.descriptionOne}
        </p>
        <p className="md:mx-6 lg:mx-0 text-justify leading-5">
          {homeData.descriptionTwo}
        </p>
      </div>
      <div className="hidden lg:block items-center gap-4">
        <img
          className="shadow-shadowPicture absolute z-30 w-[285px] h-[454px] rounded-3xl"
          src={pictureOne}
          alt=""
        />
        <img
          className="shadow-shadowPicture absolute ml-[188px] mt-[300px] z-20 w-[220px] h-[274px] rounded-3xl"
          src={pictureTwo}
          alt=""
        />
        <img
          className="shadow-shadowPictureThree absolute ml-[300px] mt-[50px] mb-20 z-10 w-[220px] h-[280px] rounded-3xl"
          src={pictureThree}
          alt=""
        />
      </div>
    </div>
  );
}
