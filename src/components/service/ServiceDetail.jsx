import servicesData from "../../servicesData";
import { useParams } from "react-router-dom";

import { useEffect } from "react";

export default function ServiceDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { serviceId } = useParams();

  const thisService = servicesData.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <main className="font-poppins lg:pt-4 container w-full max-w-[1280px] mx-auto">
      <header
        id="start"
        className="flex justify-center lg:justify-start items-center shadow-shadowHeader lg:rounded-[110px] mx-auto lg:mt-0 lg:h-[590px] w-full lg:w-[1260px]"
      >
        <img
          className="lg:rounded-[110px] h-[583px] object-cover pt-32 lg:pt-0 lg:h-auto"
          src={thisService.main.image}
          alt=""
        />
        <h1 className="text-[50px] md:text-6xl lg:text-7xl lg:text-white font-extrabold top-36 md:top-auto md:bottom-[80%] lg:bottom-auto md:pt-0 pl-0 lg:pl-20 absolute">
          Servicios
        </h1>
        <h1 className="lg:hidden text-[39px] md:left-12 lg:left-auto leading-snug text-center md:text-start font-extrabold pt-56 text-white py-16 md:w-[65%] absolute">
          {thisService.detail.title}
        </h1>
      </header>
      <div className="px-6 lg:px-20 pb-20">
        <h1 className="hidden lg:flex text-5xl pl-10 font-semibold py-16 w-[65%] leading-[60px]">
          {thisService.detail.title}
        </h1>
        <p className="text-[19px] lg:text-[22px] text-justify pt-20 lg:pt-0 pb-12 leading-tight">
          {thisService.detail.description}
        </p>
        <div className="flex text-[17px] lg:text-[22px] leading-tight lg:gap-4">
          <ul className="space-y-7 text-justify lg:w-[55%] tracking-tighter">
            {thisService.detail.content.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
          <div className="flex justify-end pt-10 lg:w-2/4">
            <img
              className="hidden lg:flex shadow-shadowServiceDetail h-[636px] w-[373px] rounded-[25px]"
              src={thisService.detail.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
