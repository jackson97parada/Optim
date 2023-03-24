import Slider from "react-slick";
import "../service/slick.css";
import "../service/slick-theme.css";
import { CustomerLogos } from "./CustomerLogos.jsx";

export function Customer() {
  const settings = {
    className: " slider variable-width",
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 7,
    speed: 1000,
    autoplaySpeed: 700,
    autoplay: true,
  };

  const customerData = {
    title: "Nuestros Clientes",
    description:
      "Nuestra experiencia abarca proyectos de gestión ambiental y social en diferentes sectores productivos, con un rango de clientes que incluye a las empresas, entidades del gobierno y organizaciones mas importantes de colombia y america latina",
  };

  return (
    <div id="customer" className="pt-32 p-20">
      <div className="w-[52%]">
        <h2 className="text-7xl font-semibold leading-[5.2rem]">
          {customerData.title}
        </h2>
        <p className="pt-10 pb-24 text-lg text-justify leading-5 w-[85%]">
          {customerData.description}
        </p>
      </div>
      <Slider className="pb-6" {...settings}>
        {CustomerLogos.map((logo, i) => (
          <div key={logo.id}>
            <img className="text-xs" src={logo.src} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
