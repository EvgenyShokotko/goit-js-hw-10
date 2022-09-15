import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { TEMPLATE, COUNTRY_LIST } from './template-strings';
import { fetchCountries } from './API-fetchCountries';
import {
  DEBOUNCE_DELAY,
  htmlUlFlagAndCounty,
  input,
  htmlDivCountryDescription,
} from './const';

input.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));

function onInputData(event) {
  event.preventDefault();
  const country = event.target.value.trim();

  if (country === '') {
    clearFieldsOfHtml();
  }
  fetchCountries(country)
    .then(savedCountry => {
      if (savedCountry.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        clearFieldsOfHtml();
      } else if (savedCountry.length < 10 && savedCountry.length >= 2) {
        renderCardFlagAndCountry(savedCountry);
      } else if (savedCountry.length === 1) {
        rendeCardCountry(savedCountry);
      }
    })
    .catch(onFetchError);
}

function onFetchError(reject) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  clearFieldsOfHtml();
}

function rendeCardCountry(savedCountry) {
  htmlUlFlagAndCounty.innerHTML = '';
  const markup = TEMPLATE(savedCountry[0]);

  htmlDivCountryDescription.innerHTML = markup;
}

function renderCardFlagAndCountry(savedCountry) {
  let mark = [];
  for (let index = savedCountry.length - 1; index >= 0; index = index - 1) {
    const markup = COUNTRY_LIST(savedCountry[index]);
    mark.push(markup);
  }
  htmlUlFlagAndCounty.innerHTML = mark.join('');
  htmlDivCountryDescription.innerHTML = '';
}

function clearFieldsOfHtml() {
  htmlDivCountryDescription.innerHTML = '';
  htmlUlFlagAndCounty.innerHTML = '';
}
