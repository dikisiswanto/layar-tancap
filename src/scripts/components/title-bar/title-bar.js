import template from 'Utils/dom';
import html from 'Components/title-bar/title-bar.template.html';
import css from 'Components/title-bar/title-bar.style.css';

class TitleBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this._title = 'Loading...';
    this.render();
  }

  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.appendChild(this.createElem());
  }

  createElem() {
    const elem = template(html, css);
    const title = elem.querySelector('h3');
    title.innerText = this._title;
    return elem;
  }
}

customElements.define('title-bar', TitleBar);
