const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  return text1 + text2;
};
const showChar5 = text => {
  return text[4];
};
const showChar9 = text => {
  return text.substring(0, 9);
};
const toCapitals = text => {
  return text.toUpperCase();
};
const toLowerCase = text => {
  return text.toLowerCase();
};
const removeSpaces = text => {
  return text.trim();
};
const IsString = text => {
  return (text.IsString = true);
};

const getExtension = text => {
  return text.split(".").pop();
};
const countSpaces = text => {
  return text.split(" ").length - 1;
};
const InverseString = text => {
  return text
    .split("")
    .reverse()
    .join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = num => {
  return Math.abs(num);
};
const absoluteValueArray = array => {
  return array.map(Math.abs);
};
const circleSurface = radius => {
  return Math.round(Math.PI * radius * radius);
};
const hypothenuse = (ab, ac) => {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
};
const BMI = (weight, height) => {
  return parseFloat((weight / (height * height)).toFixed(2));
};

const createLanguagesArray = () => {
  let languages = ["Html", "CSS", "Java", "PHP"];
  return languages;
};

const createNumbersArray = () => {
  let nombres = [0, 1, 2, 3, 4, 5];
  return nombres;
};

const replaceElement = languages => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = languages => {
  languages.push("Ruby", "Python");
  return languages;
};

const addNumberElement = numbers => {
  numbers.unshift(-2, -1);
  return numbers;
};

const removeFirst = languages => {
  languages.shift();
  return languages;
};

const removeLast = languages => {
  languages.pop();
  return languages;
};

const convertStrToArr = social_arr => {
  let array = social_arr.split(",");
  return array;
};

const convertArrToStr = languages => {
  let string = languages.toString();
  return string;
};

const sortArr = social_arr => {
  social_arr.sort();
  return social_arr;
};

const invertArr = social_arr => {
  social_arr.reverse();
  return social_arr;
};
