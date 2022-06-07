import getToxicWords from "./getToxicWords.js";

const textToxicityDetector = (inputText) => {
  let toxicWordCount = 0;
  let toxicWordFoundList = [];

  const toxicWords = new Set(getToxicWords());
  const textContent = inputText.replace(".", "");

  const textContentToArray = textContent.split(" ");
  const textContentWordCount = countWords(textContentToArray);

  textContentToArray.forEach((textWord) => {
    for (const toxicWord of toxicWords) {
      if (textWord === toxicWord) {
        toxicWordFoundList.push(toxicWord);
        toxicWordCount++;
      }
    }
  });

  function countWords(words) {
    return words.length;
  }

  return {
    toxicityPercentage: ((toxicWordCount / textContentWordCount) * 100).toFixed(
      2
    ),
    toxicWordsFound: toxicWordCount,
    toxicWordsList: toxicWordFoundList,
  };
};

export default textToxicityDetector;
