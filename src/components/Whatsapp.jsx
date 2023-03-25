import { BsWhatsapp } from "react-icons/bs";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/123456"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[3rem] right-[2.5rem] z-50"
    >
      <div className="bg-[#25d33c] text-4xl text-white rounded-2xl p-3">
        <BsWhatsapp />
      </div>
    </a>
  );
}

export default Whatsapp;
