import template from 'Utils/dom';
import html from 'Components/back-button/back-button.template.html';
import css from 'Components/back-button/back-button.style.css';

class BackButton extends HTMLElement {
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
    return elem;
  }
}

customElements.define('back-button', BackButton);
