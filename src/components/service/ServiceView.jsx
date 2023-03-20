import { Navbar } from "../navbar/Navbar.jsx";

export default function ServiceView({ subTitle, description, image }) {
  return (
    <main>
      <Navbar />
      <header className="flex justify-center items-center rounded-[70px] bg-cover bg-center mx-auto mt-32 bg-bgHeader h-[590px] w-[1247px]">
        <h1>Servicios</h1>
      </header>
      <div>
        <h1>{subTitle}</h1>
        <div>
          <p>{description}</p>
          <img src={image} alt="" />
        </div>
      </div>
    </main>
  );
}
