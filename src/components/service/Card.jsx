export function Card({ image, title, description }) {
  return (
    <div className="w-[255px]">
      <img
        className="h-[344px] rounded-[27px] mx-auto shadow-shadowService"
        src={image}
        alt="image-carrousel"
      />
      <h1 className="my-8 h-14 text-[20px] text-center overflow-hidden font-semibold">
        {title}
      </h1>
      <p className="text-sm text-justify overflow-hidden">{description}</p>
    </div>
  );
}
