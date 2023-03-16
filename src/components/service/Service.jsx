import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pictureTwo from "../../../public/picture-two-home.png";

export function Service() {
  const settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };
  return (
    <div id="services">
      <h1 className="text-7xl font-bold mb-20">Servicios</h1>
      <Slider {...settings}>
        <Card
          image={pictureTwo}
          title={"Adaptación y mitigación del cambio climático"}
          description={
            "Medición de la huella de carbono hídrica de las empresas y los negocio, diseño de medidads de control de emisiones y mitigación."
          }
        />
        <Card
          image={pictureTwo}
          title={"Gestión Empresarial"}
          description={
            "Evaluación del desempeño ambiental y social de las empresas, diseño y acompañamiento en la implementación de estrategias de sostenibilidad social y ambiental."
          }
        />
        <Card
          image={pictureTwo}
          title={"Gestión Social"}
          description={
            "Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrondescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios."
          }
        />
        <Card
          image={pictureTwo}
          title={"Políticas Públicas"}
          description={
            "Fortalecimiento de organizaciones comunitarias (campesinas, indígenas, afrondescendientes) para la gestión y el manejo sostenible y productivo de los recursos naturales de sus territorios."
          }
        />
      </Slider>
    </div>
  );
}
