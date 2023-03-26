import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { Service } from "../service/Service";
import { Enterprise } from "../enterprise/Enterprise";
import { Customer } from "../customer/Customer";
import { Contact } from "../contact/Contact";

function LandingPages() {
  return (
    <div>
      <Header />
      <Home />
      <Service />
      <Enterprise />
      <Customer />
      <Contact />
    </div>
  );
}

export default LandingPages;
