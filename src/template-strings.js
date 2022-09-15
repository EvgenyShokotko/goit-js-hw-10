const Handlebars = require('handlebars');

const countryCard =
  '<div class="country-name"><img src = {{flags.svg}} alt = "{{name.official}} flag" width = 50px height = 50px> <h1 class="country">{{name.official}}</h1> <ul class="country-description"> <li class="capital">Capital: {{capital}}</li> <li class="population">Population: {{population}}</li> <li class="languages">  Languages: {{#each languages}} {{this}}, {{/each}}</li> </ul> </div> ';
const countryList =
  '<li><img src = {{flags.svg}} alt = "{{name.official}} flag" width = 50px height = 50px> <h1 class="country">{{name.official}}</h1></li>';

export const TEMPLATE = Handlebars.compile(countryCard);
export const COUNTRY_LIST = Handlebars.compile(countryList);
