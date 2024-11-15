// const --- = document.querySelector("---");
// const --- = document.getElementById("---");
// window.addEventListener("---", () => {----});

// test
// window.addEventListener("click", (e) => {
//   console.log(e.target);

// });
// partie a supprimée
// https://randomuser.me/api/?results=24
let userData = [];
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
};
const userDiplay = async () => {
  await fetchUser();
  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}"
  <H3>${user.name.first}</H3> 
  </div>`
    )
    .join("");
};

userDiplay();
