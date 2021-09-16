import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import { debounce } from 'lodash';

refs.searchInput.addEventListener('input', debounce(onSearchInput, 500));

function onSearchInput(e) {
  if (e.target.value === '') {
    return;
  }
  fetchCountries(e.target.value)
    .then(list => {
      return list
        .map(el => {
          return `<li>${el.name}</li>`;
        })
        .join('');
    })
    .then(list => {
      refs.countriesList.innerHTML = list;
    });
}
