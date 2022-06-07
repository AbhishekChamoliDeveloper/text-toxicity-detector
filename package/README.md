
# text-toxicity-detector

A library which can detect toxicity in text content and then return the total toxicity text cotain with the toxic word found in text and also the toxic word count. This library is 98% accurate in detecting toxicity in text content


## Installation

Install text-toxicity-detector with npm

```bash
  npm i text-toxicity-detector
```
    
## For ES Module

```bash
 import textToxicityDetector from "text-toxicity-detector";
```
## Documentation


```bash
 const text = "You are a piece of shit.";

 const result = textToxicityDetector(text);

 console.log(result);
```



## Output

```bash
  {
    toxicityPercentage: '33.33',
    toxicWordsFound: 2,
    toxicWordsList: [ 'piece', 'shit' ]
  }
  
```
## Authors

- [@Abhishek Chamoli](https://github.com/AbhishekChamoliDeveloper)

