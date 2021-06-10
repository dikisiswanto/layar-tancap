import image from 'Assets/image.svg';
import star from 'Assets/star.svg';
import putDecimal from 'Utils/libs';
import template from 'Utils/dom';
import html from 'Components/poster/poster.template.html';
import css from 'Components/poster/poster.style.css';

class Poster extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this._grid = false;
  }

  set poster(poster) {
    this._poster = poster;
    this.render();
  }

  set grid(grid) {
    this._grid = grid;
  }

  render() {
    this.shadowDOM.appendChild(this.createElem());
  }

  createElem() {
    const elem = template(html, css);
    const posterElem = elem.querySelector('.poster');
    posterElem.href = `movie/${this._poster.id}`;
    if (this._grid) posterElem.classList.add('poster-grid');
    const posterImgElem = elem.querySelector('.image');
    const posterImgItem = document.createElement('img');
    if (this._poster.poster === null) {
      posterImgElem.classList.remove('image');
      posterImgItem.src = image;
    } else {
      posterImgElem.classList.remove('default-poster');
      posterImgItem.src = this._poster.poster;
    }

    posterImgItem.addEventListener('load', () => {
      posterImgElem.classList.remove('shimmer');
      posterImgElem.appendChild(posterImgItem);
    });
    const posterTitleElem = elem.querySelector('h5');
    posterTitleElem.innerText = this._poster.title;
    const rating = elem.querySelector('.rating');
    const starElem = document.createElement('img');
    const ratingVal = elem.querySelector('.rate');
    starElem.src = star;
    rating.insertBefore(starElem, ratingVal);
    ratingVal.innerText =
      this._poster.rate === 0 ? '-' : putDecimal(this._poster.rate);
    const year = elem.querySelector('.year');
    year.innerText = this._poster.releaseYear;
    return elem;
  }
}

customElements.define('poster-item', Poster);
