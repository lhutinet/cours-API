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
// fetch("data.json")
//   .then((res) => res.json())
//   .then
const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
// fetch("data.json", init).then((res) => console.log(res));
// CRUD==> Create (POST), read(GET), update (PUT),delete(DELETE)

// utilisation server dispent  a revoir plus tard

// -----JSON--------------------
//------------------------
// Methode .json()=> methode qui s'auto résout re renvoit le body de la requette

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(JSON.stringify(data));stringify il converti en
    let settings = JSON.stringify(data);
    // console.log(settings);
    // parse => transforme json en objet js
    // console.log(JSON.parse(settings));
  });

/////------------------------
// web API  (les api du navigateur)
//------------------
// client storage

// Local Storage
// pour cree une donne dans le localStorage
// sur le PC meme si la page est fermé

localStorage.data = "je stock la data";
localStorage.truc = "la suite";
// les donnee
//localStorage.clear();  Supprime toutes les données
// pour supprimer
localStorage.removeItem("truc");
console.log(localStorage);

// aller chercher la reponse a une question ulilisateur
// document.body.textContent = localStorage.data

// pour mettre a jour on ecrase le dernier gagne
localStorage.user = "denis";
localStorage.user = "hervé";

// on ne peut pas passer un tableau seulement des chaine de caractere
const obj = {
  name: "jacques",
  age: 56,
};

localStorage.user = JSON.stringify(obj);
const machin = JSON.parse(localStorage.user);
// console.log(machin.age);

//session storage
// stock le temps que la page est ouverte
// meme manip que localStorage
// sessionStorage.datasSetting = "et voila";

//-------------Cookies--------
document.cookie = "username=truc;path=/;max-age=450000;secure;samesite";
document.cookie = "ages=22";
