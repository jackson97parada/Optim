import { Link } from "react-router-dom";

export function Card({ image, title, description, serviceId }) {
  return (
    <div className="w-[255px]">
      <Link to={`/Optim/services/${serviceId}`}>
        <img
          className="h-[344px] w-[248px] rounded-[27px] mx-auto shadow-shadowService bg-contain "
          src={image}
          alt="image-carrousel"
        />
      </Link>
      <h1 className="my-8 h-14 text-[20px] text-center overflow-hidden font-semibold">
        {title}
      </h1>
      <p className="text-sm text-justify overflow-hidden">{description}</p>
    </div>
  );
}
