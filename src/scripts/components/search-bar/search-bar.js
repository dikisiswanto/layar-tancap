import template from 'Utils/dom';
import html from 'Components/search-bar/search-bar.template.html';
import css from 'Components/search-bar/search-bar.style.css';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.appendChild(this.createElem());
  }

  createElem() {
    const elem = template(html, css);
    const searchForm = elem.querySelector('form');
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = encodeURI(event.target.query.value);
      if (query) {
        window.history.pushState({}, window.title, `movie/search/${query}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    });
    return elem;
  }
}

customElements.define('search-bar', SearchBar);
