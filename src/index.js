import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 1000;

const Handlebars = require('handlebars');
const countryCard =
  '<div class="country-name"><img src = {{flags.svg}} alt = "{{name.official}} flag" width = 50px height = 50px> <h1 class="country">{{name.official}}</h1> <ul class="country-description"> <li class="capital">Capital: {{capital}}</li> <li class="population">Population: {{population}}</li> <li class="languages">  Languages: {{#each languages}} {{this}}, {{/each}}</li> </ul> </div> ';

const TEMPLATE = Handlebars.compile(countryCard);

const countryList = '<li><img src = {{flags.svg}} alt = "{{name.official}} flag" width = 50px height = 50px> <h1 class="country">{{name.official}}</h1></li>';
const ul = document.querySelector('.country-list')
const COUNTRY_LIST = Handlebars.compile(countryList);
const input = document.querySelector('input');
console.log(input);
const div = document.querySelector('.country-info');
input.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));

const BASE_URL = 'https://restcountries.com/v3.1/name';

function onInputData(event) {
  event.preventDefault();
  const country = event.target.value;
  console.log(country.length);
if (country==='') {
  console.log('uyer');  
    div.innerHTML = '';
}
  fetch(`${BASE_URL}/${country}`)
    .then(response => {
      return response.json();
    })
    .then(savedCountry => {
      console.log(savedCountry);
      if (savedCountry.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (savedCountry.length < 10 && savedCountry.length >= 2) {
       let mark =[]   
          for (let index = savedCountry.length - 1; index >= 0; index = index - 1) {

            const markup = COUNTRY_LIST(savedCountry[index]);
              mark.push(markup); 
              console.log(mark)
            
          }
        ul.innerHTML = mark.join('');  

      } else if ((savedCountry.length === 1)) {
          ul.innerHTML = ''
        const markup = TEMPLATE(savedCountry[0]);
        console.log(markup);
        div.innerHTML = markup;
      }
    })
    .catch(onFetchError);
}

function onFetchError(error) {
  console.log(error);
  alert('УПС, мы не нашли такого покемона');
}

// function fetchCountries(name) {
//     return fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
//         .then(response => { return response.json() })

// }

// function rendeCard(coun) {
//     const markup = TEMPLATE(coun);
//     console.log(TEMPLATE);
//     div.innerHTML = markup;
// }
