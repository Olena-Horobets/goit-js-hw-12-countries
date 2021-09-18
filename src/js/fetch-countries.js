import './notiflix-styles';

import refs from './refs';
import countryMarkupTpl from '../templates/countryMarkup.hbs';
import { Notify, Loading } from 'notiflix';

const { success, warning, failure, info } = Notify;
const SEARCH_URL = 'https://restcountries.eu/rest/v2/name/';

export function onMarkupRender(list = '', item = '') {
  refs.countriesList.innerHTML = list;
  refs.container.innerHTML = item;
}

export function fetchCountries(searchQuery) {
  refs.resetBtn.disabled = false;

  return fetch(`${SEARCH_URL}${searchQuery}`)
    .then(res => res.json())
    .then(list => {
      if (list.status > 400 && list.status <= 499) {
        throw Error;
      } else if (list.length > 10) {
        onServerResponse(warning, 'Please, enter more specific name!');
      } else if (list.length > 1 && list.length < 10) {
        onMarkupRender(getCountriesListMarkup(list), '');
        onServerResponse(info, 'Choose country fron the list.');
      } else if (list.length === 1) {
        const markup = countryMarkupTpl(list);
        onMarkupRender('', markup);
        onServerResponse(success, 'Good job! Enjoy the service!');
      }
    })
    .catch(err => {
      onServerResponse(failure, 'Please, enter valid country name!');
      onMarkupRender();
    });
}

function getCountriesListMarkup(list) {
  return list
    .map(el => {
      return `<li class="countries__item">${el.name}</li>`;
    })
    .join('');
}

function onServerResponse(cb, message) {
  cb(message);
  Loading.remove();
}
