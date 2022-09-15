const BASE_URL = 'https://restcountries.com/v3.1/name';
const OPTIONS = '?fields=name,capital,population,flags,languages';

export function fetchCountries(country) {
  return fetch(`${BASE_URL}/${country}${OPTIONS}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
