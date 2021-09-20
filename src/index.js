import './sass/main.scss';

import { debounce } from 'lodash';
import { Loading } from 'notiflix';

import refs from './js/refs';
import { fetchCountries } from './js/fetch-countries';
import { onInputReset } from './js/fetch-countries';
import getNameFromList from './js/get-name-from-list.js';

refs.searchInput.addEventListener('input', debounce(onSearchInput, 500));
refs.countriesList.addEventListener('click', getNameFromList);
refs.resetBtn.addEventListener('click', onInputReset);
refs.resetBtn.disabled = true;

function onSearchInput(e) {
  Loading.standard();
  fetchCountries(e.target.value);
}
