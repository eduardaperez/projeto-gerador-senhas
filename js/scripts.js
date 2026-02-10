const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const ranges = [
    [33, 47],
    [58, 64],
    [91, 96],
    [123, 126],
  ];
  const [min, max] = ranges[Math.floor(Math.random() * ranges.length)];
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol,
) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

// eventos
generatePasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  );
});
