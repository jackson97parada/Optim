import { Link } from "react-router-dom";

export function Card({ image, title, description, serviceId }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Link to={`/Optim/services/${serviceId}`} onClick={handleLinkClick}>
        <img
          className="h-[344px] w-[248px] rounded-[27px] ml-6 shadow-shadowService transform hover:translate-y-[6px] hover:shadow transition"
          src={image}
          alt="image-carrousel"
        />

        <h1 className="my-8 mt-14 h-14 text-[20px] w-[300px] text-center font-semibold leading-tight">
          {title}
        </h1>
        <p className="text-sm w-3/4 ml-2 text-justify leading-tight overflow-hidden">
          {description}
        </p>
      </Link>
    </div>
  );
}
