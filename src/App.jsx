import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Service } from "./components/service/Service";
import { Enterprise } from "./components/enterprise/Enterprise";
import { Customer } from "./components/customer/Customer";
import { Contact } from "./components/contact/Contact";

export default function App() {
  return (
    <div className="font-poppins pt-32 container w-full max-w-[1280px] mx-auto">
      <Navbar />
      <Header />
      <Home />
      <Service />
      <Enterprise />
      <Customer />
      <Contact />
    </div>
  );
}
