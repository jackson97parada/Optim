import userOne from "/user-one.jpeg";
import userTwo from "/user-two.jpeg";
import userThree from "/user-three.jpeg";
import userFour from "/user-four.jpeg";

export const partnersData = [
  {
    id: 1,
    image: userOne,
    name: "Eduardo Uribe",
    description: "",
  },
  {
    id: 2,
    detail: {
      image: userTwo,
      name: "Jaime Bermúdez",
      description: "",
    },
  },
  {
    id: 3,
    detail: {
      image: userThree,
      name: "Santiago Arango",
      description: "",
    },
  },
  {
    id: 4,
    detail: {
      image: userFour,
      name: "Julián Páez",
      description: "",
    },
  },
];

export function Partner({ image, name, description }) {
  return (
    <div>
      <img
        className="w-[130px] h-[130px] md:w-[170px] md:h-[170px] bg-contain hover:translate-y-2 hover:shadow bg-center transition-all cursor-pointer grayscale hover:grayscale-0 rounded-[30px] shadow-shadowPartner mx-auto"
        src={image}
        alt="partner-image"
      />
      <h1 className="text-center text-lg md:text-[26px] cursor-pointer font-semibold mt-8">
        {name}
      </h1>
      <p className="text-xl text-justify w-3/4 pt-8 mx-auto">{description}</p>
    </div>
  );
}
