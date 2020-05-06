import template from 'Utils/dom';
import html from 'Components/footer/footer.template.html';
import css from 'Components/footer/footer.style.css';

class Footer extends HTMLElement {
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

customElements.define('footer-area', Footer);
