import axios from "axios";

const API_URL =
  "https://text-toxicity-detector-default-rtdb.firebaseio.com/toxicWords.json";

const toxicWords = await axios.get(API_URL).then((response) => {
  const data = response.data;

  for (const key in data) {
    return data[key].words;
  }
});

export default toxicWords;
