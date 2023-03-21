import pictureContact from "/picture-contact.jpg";
// import iconTel from "/icon-tel.png";
// import iconMessage from "/icon-message.png";
import iconUbication from "/icon-ubication.png";

export function Contact() {
  const contactData = {
    title: "Contáctanos",
    description:
      "Si deseas consultar mayor informacion sobre nuestros servicios o tienes alguna duda al respecto, no dudes en contactarnos.",
    phoneNumbers: ["3002093734", "3213704639"],
    email: "info@optimconsult.com",
    city: "Bogotá - Colombia",
    address: "Carrera 19 B # 84 - 31 oficina 302",
  };

  return (
    <div id="contact" className="grid grid-cols-2 p-20 mt-20">
      <div>
        <h2 className="text-7xl font-semibold leading-[5.2rem]">
          {contactData.title}
        </h2>
        <p className="leading-5 text-justify tracking-tight w-[88%]">
          {contactData.description}
        </p>
        <div className="flex items-center gap-6 my-10">
          <img className="w-14" src={iconUbication} alt="" />
          <ul className="text-lg">
            {contactData.phoneNumbers.map((phoneNumber, i) => (
              <li key={i}>{phoneNumber}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <img className="w-14" src={iconUbication} alt="" />
          <h2 className="text-lg">{contactData.email}</h2>
        </div>
        <div className="flex items-center gap-6 my-10">
          <img className="w-14" src={iconUbication} alt="" />
          <ul className="text-lg">
            <li>{contactData.city}</li>
            <li>{contactData.address}</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-[512px] h-[345px] shadow-shadowContact object-cover rounded-[40px]"
          src={pictureContact}
          alt="picture-contact"
        />
      </div>
    </div>
  );
}
