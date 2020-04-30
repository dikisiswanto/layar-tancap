import template from 'Utils/dom.js';
import html from 'Components/footer/footer.template.html';
import css from 'Components/footer/footer.style.css';

class Footer extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.appendChild(this.loadELem());
	}

	loadELem() {
		const elem = template(html, css);
		return elem;
	}
}

customElements.define('footer-area', Footer);