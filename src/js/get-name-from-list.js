import { fetchCountries } from './fetch-countries';

export default function getNameFromList(e) {
  fetchCountries(e.target.textContent);
}
