export function Partner({ image, name }) {
  return (
    <div>
      <img
        className="w-[170px] h-[170px] bg-contain bg-center transition-all cursor-pointer grayscale hover:grayscale-0 rounded-[30px] shadow-shadowPartner mx-auto"
        src={image}
        alt="partner-image"
      />
      <h1 className="text-center text-[26px] font-semibold mt-8">{name}</h1>
    </div>
  );
}
