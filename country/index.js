// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

const countrieContainer = document.querySelector(".countries-container");
const filterContainer = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
let rangeValue = document.getElementById("rangeValue");
let countriesData = [];

console.log(inputRange);
console.log(rangeValue.textContent);

const fetchccountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
};

inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
});

const countrieDisplay = () => {
  countriesData.length = inputRange.value;
  countrieContainer.innerHTML = countriesData
    .filter((country) =>
      country.translations.fr.common.includes(inputSearch.value)
    )
    .map(
      (country) =>
        `
   <div class = "card" >
      <img src="${country.flags.png}" alt="description"/>
      <h2>${country.translations.fra.common}</h2>
      <p>${country.capital}</p>
    <span>population ${country.population} habitants</span>
  </div>
    `
    )
    .join("");
};

filterContainer.addEventListener("input", (e) => {
  console.log(e.target.value);

  fetchccountries();
  countrieDisplay();
});

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
