import Slider from "react-slick";
import "../service/slick.css";
import "../service/slick-theme.css";
import { CustomerLogos } from "./CustomerLogos.jsx";

export function Customer() {
  const settings = {
    className: " slider variable-width",
    centerMode: true,
    centerPadding: "80px",
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    speed: 1000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const customerData = {
    title: "Nuestros Clientes",
    description:
      "Nuestra experiencia abarca proyectos de gestión ambiental y social en diferentes sectores productivos, con un rango de clientes que incluye a las empresas, entidades del gobierno y organizaciones mas importantes de colombia y america latina",
  };

  return (
    <div id="customer" className="pt-32 mx-6 lg:mx-0 lg:p-20">
      <div className="lg:w-[52%] lg:mt-8">
        <h2 className="text-6xl md:text-7xl text-center lg:text-start md:w-2/4 lg:w-auto md:mx-auto lg:mx-0 font-semibold leading-[5.2rem]">
          {customerData.title}
        </h2>
        <p className="md:mx-6 lg:mx-0 pt-10 pb-24 text-lg text-justify leading-5 lg:w-[85%]">
          {customerData.description}
        </p>
      </div>
      <Slider className="pb-6" {...settings}>
        {CustomerLogos.map((logo) => (
          <div key={logo.id}>
            <img className="text-xs" src={logo.src} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
