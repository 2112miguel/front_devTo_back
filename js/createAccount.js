import { elemetos } from "./global.js";
const url = `http://localhost:8000/users`;

window.logIn = (e) => {
  e.preventDefault();
  const objPasswor = {};
  const inputsData = Array.from(e.target.querySelectorAll("input"));

  inputsData.forEach((input) => {
    if (input.value != "") {
      objPasswor[input.name] = input.value;
    }
  });
  if (objPasswor.password == objPasswor.passwordTwo) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: objPasswor.email,
        password: objPasswor.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else console.log("no son iguales");
  console.log(objPasswor);

  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
};

window.ocultarSeccion = () => {
  elemetos.imgPerfil.style.display = "none";
  elemetos.notificacion.style.display = "none";
  elemetos.createAccount.style.display = "none";
  elemetos.createPost.style.display = "none";
};

ocultarSeccion();
