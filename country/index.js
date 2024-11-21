// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

const countrieContainer = document.querySelector(".countries-container");
const filterContainer = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
// const rangeContainer = document.querySelector(".range-container");
let nomDuPays = "";
let rangeValue = document.getElementById("rangeValue");
let countriesData = [];

const fetchccountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  // console.log(countriesData);
};

const countrieDisplay = () => {
  ///ne pas supprimer permet de ce blalder dans le tableau
  // console.log(countriesData.slice(0, inputRange.value));
  ///ne pas supprimer permet de ce blalder dans le tableau
  countrieContainer.innerHTML = countriesData

    .filter((country) => country.translations.fra.common.includes(nomDuPays))
    .slice(0, inputRange.value)
    .map((country) => {
      console.log(country);

      if (country === null) {
        console.log("tut");
      } else {
        return `
        <div class = "card" >
        <img src="${country.flags.png}" alt="description"/>
        <h2>${country.translations.fra.common}</h2>
        <p>${country.capital}</p>
        <span>population ${country.population} habitants</span>
        </div>
        `;
      }
    })
    .join("");
};

const rangeChange = () => {
  inputRange.addEventListener("input", () => {
    rangeValue.textContent = inputRange.value;
  });
};

filterContainer.addEventListener("input", (e) => {
  nomDuPays = e.target.value;
  console.log(nomDuPays);

  rangeChange();
  fetchccountries()
    // .then(() => )
    .then(() => countrieDisplay());
});

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
