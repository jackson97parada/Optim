export function Partner({ image, name }) {
  return (
    <div>
      <img
        className="w-20 h-50 bg-cover rounded-full mx-auto"
        src={image}
        alt="partner-image"
      />
      <h1 className="text-center">{name}</h1>
    </div>
  );
}
