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

  const datParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  console.log(userData[0]);
};
const userDiplay = async () => {
  await fetchUser();
  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}">
  <H3>${user.name.first}</H3> 
  <p>${user.location.city}, ${datParser(user.dob.date)}</p>
  <em>Menbre depuis : ${datParser(user.registered.date)} jours</em>
  </div>
  `
    )
    .join("");
};

userDiplay();
