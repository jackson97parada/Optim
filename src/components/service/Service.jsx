import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { Card } from "./Card";
import pictureTwo from "/picture-two-home.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const servicesData = [
  {
    title: "Adaptación y mitigación del cambio climático",
    description:
      "Medición de la huella de carbono hídrica de las empresas y los negocio, diseño de medidads de control de emisiones y mitigación.",
    id: 1,
  },
  {
    title: "Gestión Empresarial",
    description:
      "Evaluación del desempeño ambiental y social de las empresas, diseño y acompañamiento en la implementación de estrategias de sostenibilidad social y ambiental.",
    id: 2,
  },
  {
    title: "Gestión Social",
    description:
      "Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrondescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios.",
    id: 3,
  },
  {
    title: "Políticas Públicas",
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
    centerPadding: "320px",
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
  };
  return (
    <div id="services" className="pt-10 pb-40">
      <h1 className="text-7xl font-semibold ml-20 mb-12">Servicios</h1>
      <Slider className="pb-6" {...settings}>
        {servicesData.map((service, i) => (
          <Card
            key={i}
            image={pictureTwo}
            title={service.title}
            description={service.description}
            serviceId={service.id}
          />
        ))}
      </Slider>
    </div>
  );
}
