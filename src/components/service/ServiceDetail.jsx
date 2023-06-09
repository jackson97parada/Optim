import { Navbar } from "../navbar/Navbar.jsx";
import servicesData from "../../servicesData";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer.jsx";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const thisService = servicesData.find(
    (service) => service.id === parseInt(serviceId)
  );
  return (
    <main className="font-poppins pt-4 container w-full max-w-[1280px] mx-auto">
      <Navbar />
      <header
        id="start"
        className="flex justify-start items-center shadow-shadowHeader rounded-[110px] mx-auto mt-32 h-[590px] w-[1260px]"
      >
        <img className="rounded-[110px]" src={thisService.main.image} alt="" />
        <h1 className="text-7xl text-white font-extrabold pl-20 absolute">
          Servicios
        </h1>
      </header>
      <div className="px-20 pb-20">
        <h1 className="text-5xl pl-10 font-semibold py-16 w-[65%] leading-[60px]">
          {thisService.detail.title}
        </h1>
        <p className="text-[22px] text-justify pb-12 leading-tight">
          {thisService.detail.description}
        </p>
        <div className="flex text-[22px] leading-tight gap-4">
          <ul className="space-y-7 w-[55%]">
            {thisService.detail.content.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
          <div className="flex justify-end pt-10 w-2/4">
            <img
              className="shadow-shadowServiceDetail h-[636px] w-[373px] rounded-[25px]"
              src={thisService.detail.image}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
