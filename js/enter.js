const url = ``;

const logIn = (e) => {
  e.preventDefault();
  const objPasswor = {};
  const inputsData = Array.from(e.target.querySelectorAll("input"));
  console.log(inputsData);
  inputsData.forEach((input) => {
    if (input.value != "") {
      objPasswor[input.name] = input.value;
    }
  });
  console.log(objPasswor);
};
