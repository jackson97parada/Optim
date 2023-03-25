import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Service } from "./components/service/Service";
import { Enterprise } from "./components/enterprise/Enterprise";
import { Customer } from "./components/customer/Customer";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/Whatsapp";

export default function App() {
  return (
    <div className="font-poppins pt-28 md:pt-32 container min-w-[300px] w-auto md:w-full max-w-[1280px] md:mx-auto">
      <Navbar />
      <Header />
      <Home />
      <Service />
      <Enterprise />
      <Customer />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}
