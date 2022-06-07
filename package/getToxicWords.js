import toxicWords from "./toxicWords.js";

const getToxicWords = () => {
  const words = toxicWords;
  const filteredWords = [];

  words.forEach((word) => {
    filteredWords.push(word.toLocaleLowerCase());
  });

  return filteredWords;
};

export default getToxicWords;
