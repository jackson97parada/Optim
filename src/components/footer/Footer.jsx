import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="flex justify-between mx-10 py-8 border-t-2 border-black">
      <ul className="flex text-2xl gap-4">
        <a href="">{<BsWhatsapp />}</a>
        <a href="">{<AiOutlineLinkedin />}</a>
      </ul>
      <ul className="flex">
        <h2 className="text-sm font-medium">Optim Consult SAS 2023.</h2>
        <h2 className="text-sm font-medium pl-3">
          Todos los derechos reservados
        </h2>
      </ul>
    </footer>
  );
}

export default Footer;
