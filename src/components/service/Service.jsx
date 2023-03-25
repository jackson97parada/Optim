import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { Card } from "./Card";
import cambioClimatico from "/cambio-climatico.jpg";
import manos from "/manos.jpg";
import niños from "/niños.jpg";
import reunion from "/reunion.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const servicesData = [
  {
    image: cambioClimatico,
    title: "Adaptación y mitigación del cambio climático",
    description:
      "Medición de la huella de carbono hídrica de las empresas y los negocio, diseño de medidads de control de emisiones y mitigación.",
    id: 1,
  },
  {
    image: manos,
    title: "Operación de proyectos de cooperación internacional",
    description:
      "Evaluación del desempeño ambiental y social de las empresas, diseño y acompañamiento en la implementación de estrategias de sostenibilidad social y ambiental.",
    id: 2,
  },
  {
    image: niños,
    title: "Gestión ambiental y social de proyectos productivos",
    description:
      "Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrondescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios.",
    id: 3,
  },
  {
    image: reunion,
    title: "Desarrollo de políticas públicas",
    description:
      "Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrondescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios.",
    id: 4,
  },
];

export function Service() {
  const settings = {
    className: " slider variable-width",
    dots: true,
    dotsClass: "slick-dots",
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "-100px",
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "30px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "15px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="services"
      className="pt-32 mx-6 transition duration-500 ease-in-out"
    >
      <h1 className="text-6xl text-center lg:text-start md:text-7xl font-semibold lg:ml-20 mb-16 lg:mb-12">
        Servicios
      </h1>
      <Slider className="pb-6" {...settings}>
        {servicesData.map((service, i) => (
          <Card
            key={i}
            image={service.image}
            title={service.title}
            description={service.description}
            serviceId={service.id}
          />
        ))}
      </Slider>
    </div>
  );
}
