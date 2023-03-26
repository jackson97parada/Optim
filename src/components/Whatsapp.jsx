import { BsWhatsapp } from "react-icons/bs";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/+573213704639"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[3rem] right-[2.5rem] z-50"
    >
      <div className="bg-[#25d33c] text-4xl text-white shadow-shadowWp transform hover:-translate-x-1 hover:translate-y-1 hover:shadow transition rounded-2xl p-3">
        <BsWhatsapp />
      </div>
    </a>
  );
}

export default Whatsapp;
