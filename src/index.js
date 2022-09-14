import './css/styles.css';
import { TEMPLATE } from "./part";
import API from "./api-service";

const DEBOUNCE_DELAY = 300;

const body = document.querySelector('.pokemons');
const btn = document.querySelector('.search-button');
const form = document.querySelector('.search-form');
form.style.display = 'flex';
btn.style.marginLeft = '30px';
form.addEventListener('submit', onSearchFormClick);

function onSearchFormClick(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.search.value;
     
    API.fetchPocemon(input)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
    
}

function renderPokemonCard(pokemon) {
    const markup = TEMPLATE(pokemon);
    body.innerHTML = markup;
}

function onFetchError(error) {
    console.log(error);
    alert('УПС, мы не нашли такого покемона');
}