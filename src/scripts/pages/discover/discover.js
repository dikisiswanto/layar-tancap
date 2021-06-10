/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
import MovieService from 'Services/movie-service';
import template from 'Utils/dom';
import html from 'Pages/discover/discover.template.html';
import 'Components/title-bar/title-bar';
import 'Components/back-button/back-button';
import 'Components/gallery/gallery';
import 'Components/poster/poster';
import 'Components/footer/footer';

const service = new MovieService();

export default class Discover extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this._type = location.pathname.split('/')[2];
    this._query = decodeURI(location.pathname.split('/')[3]);
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    const elem = template(html);
    const galleryElem = elem.querySelector('gallery-list');
    galleryElem.grid = true;
    if (this._type === 'genre') {
      service.getMoviesByGenre(this._query, (movies) => {
        this.setData(galleryElem, movies);
      });
    } else {
      service.search(this._query, (movies) => {
        this.setData(galleryElem, movies);
      });
    }
    this.shadowDOM.appendChild(elem);
  }

  setData(elem, data) {
    elem.gallery = data;
    const title =
      this._type === 'genre'
        ? `Genre: ${service.getGenreById(this._query)}`
        : `Results for: ${this._query}`;
    const titleElem = elem.previousElementSibling;
    titleElem.title = title;
  }
}

customElements.define('discover-page', Discover);
