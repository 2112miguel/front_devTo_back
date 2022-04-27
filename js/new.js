const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const urlApi = "http://localhost:8000/posts";

const crearPost = (e) => {
  e.preventDefault();
  const token = localStorage.getItem(id);
  console.log(token);
  const inputNodes = Array.from(e.target.querySelectorAll("input"));
  const txtAreaNode = e.target.querySelectorAll("textarea");
  const post = {};
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  //console.log()
  const month = months[d.getMonth()];
  const day = d.getUTCDate();
  inputNodes.forEach((input) => {
    post[input.name] = input.value;
  });
  txtAreaNode.forEach((txt) => {
    post[txt.name] = txt.value;
  });
  post["commentsPost"] = "0 comments";
  post["reactionsPost"] = "0 reactions";
  post["timeReadP"] = "4 min read";
  post["datePost"] = `${month} ${day}`;
  post["userEmail"] = id;
  console.log(post);
  fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
};
