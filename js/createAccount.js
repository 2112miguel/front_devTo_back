import { elemetos } from "./global.js";
const url = ``;

window.logIn = (e) => {
  e.preventDefault();
  const objPasswor = {};
  const inputsData = Array.from(e.target.querySelectorAll("input"));

  inputsData.forEach((input) => {
    if (input.value != "") {
      objPasswor[input.name] = input.value;
    }
  });
  if (objPasswor.password == objPasswor.passwordTwo) console.log("Son iguañes");
  else console.log("no son iguales");
  console.log(objPasswor);
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
};

window.ocultarSeccion = () => {
  console.log(elemetos.createAccount);
  if (
    elemetos.imgPerfil.id == "imgPerfil" ||
    elemetos.notificacion == "notificacion" ||
    elemetos.createPost == "createPost" ||
    elemetos.createAccount == "createAccount"
  ) {
  }
  elemetos.imgPerfil.style.display = "none";
  elemetos.notificacion.style.display = "none";
  elemetos.createAccount.style.display = "none";
  elemetos.createPost.style.display = "none";
};

ocultarSeccion();
