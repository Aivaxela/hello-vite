import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => {
    return item.name === selectedAnimal;
  });

  if (animal == undefined) {
    return <img src={data[0].image} alt={data[0].name} />;
  } else {
    return <img src={animal.image} alt={animal.name} />;
  }
}

export default Animal;
