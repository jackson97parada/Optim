import { Link } from "react-router-dom";

export function Partner({ image, name, description }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Link to={"/Optim/enterpriseDetail"} onClick={handleLinkClick}>
        <img
          className="w-[130px] h-[130px] md:w-[170px] md:h-[170px] bg-contain hover:translate-y-2 hover:shadow bg-center transition-all cursor-pointer grayscale hover:grayscale-0 rounded-[30px] shadow-shadowPartner mx-auto"
          src={image}
          alt="partner-image"
        />
        <h1 className="text-center text-lg md:text-[26px] cursor-pointer font-semibold mt-8">
          {name}
        </h1>
      </Link>
      <p>{description}</p>
    </div>
  );
}
