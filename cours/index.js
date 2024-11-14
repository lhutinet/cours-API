// const --- = document.querySelector("---");
// const --- = document.getElementById("---");
// window.addExventListener("---", () => {----});

// test
// window.addEventListener("click", (e) => {
//   console.log(e.target);

// });
// partie a supprimée
//-------------------------------------------
// XMLHttpRequest  ancienne ne se fait plus
// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//-----------------------------------------
// FECH
//-----------------------------------------
// fetch("mon lien", "objet d'option").then((reponse) ==> {
//   //response
// })
// .catch((err)=> console.log(err))

// fetch("data.txt").then((res) => console.log(res));
// fetch("data.txt").then((res) => res.text().then((data) => console.log(data)));
// plusieur reponses attendue en trotre code erreur ici 200  tout est ok :
//  lien vers site avecla liste des erreurs en html:
// https://developer.mozilla.org/fr/docs/Web/HTTP/Status
fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
