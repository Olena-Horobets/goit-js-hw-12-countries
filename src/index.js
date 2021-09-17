import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import { before, debounce } from 'lodash';
import countryMarkupTpl from './templates/countryMarkup.hbs';

refs.searchInput.addEventListener('input', debounce(onSearchInput, 500));

function onSearchInput(e) {
  if (e.target.value === '') {
    refs.countriesList.innerHTML = '';
    return;
  }

  fetchCountries(e.target.value)
    .then(list => {
      if (list.status > 400 && list.status <= 499) {
        console.log('Enter valid country name');
        refs.countriesList.innerHTML = '';
        e.target.value = '';
        return;
      } else if (list.length > 10) {
        console.log('Enter more specific name, please');
      } else if (list.length > 1 && list.length < 10) {
        let countriesListMarkup = list
          .map(el => {
            return `<li class="countries__item">${el.name}</li>`;
          })
          .join('');
        refs.countriesList.innerHTML = countriesListMarkup;
      } else if (list.length === 1) {
        const markup = countryMarkupTpl(list);
        console.log('render');
        refs.countriesList.innerHTML = '';
        refs.container.insertAdjacentHTML('beforeend', markup);

        return;
      }
    })
    .catch(err => {
      console.error(err);
    });
}
