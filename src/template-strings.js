const Handlebars = require('handlebars');

const countryCard =
  '<div class="country-name"><img class="flag"src = {{flags.svg}} alt = "{{name.official}} flag"> <h1 class="country">{{name.official}}</h1> <img class="coatOfArms"src = {{coatOfArms.svg}} alt = "{{name.official}} coatOfArms"> </div><ul class="country-description"> <li class="item">Capital: {{capital}}</li> <li class="item">Population: {{population}}</li> <li class="item">  Languages: {{#each languages}} {{this}} {{/each}}</li> </ul>  ';
const countryList =
  '<li class="item-top"><img class="flag" src = {{flags.svg}} alt = "{{name.official}} flag" > <h1 class="country">{{name.official}}</h1></li>';

export const TEMPLATE = Handlebars.compile(countryCard);
export const COUNTRY_LIST = Handlebars.compile(countryList);
