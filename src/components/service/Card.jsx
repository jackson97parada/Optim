export function Card({ image, title, description }) {
  return (
    <div>
      <img className="w-60" src={image} alt="image-carrousel" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
