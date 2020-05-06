import template from 'Utils/dom';
import html from 'Components/loader/loader.template.html';
import css from 'Components/loader/loader.style.css';

class Loader extends HTMLElement {
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

customElements.define('loader-item', Loader);
