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

  console.log(userData[0]);
};
const userDiplay = async () => {
  await fetchUser();
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timeStamp = Date.parse(date);
    return Math.ceil((todayTimestamp - timeStamp) / 8.64e7 / 365);
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}">
  <H3>${user.name.first} ${user.name.last}</H3> 
  <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
  <em>Membre depuis : ${dayCalc(user.registered.date)} années</em>
  </div>
  `
    )
    .join("");
};

userDiplay();
