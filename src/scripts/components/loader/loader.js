import template from "../../utils/dom.js";
import html from "./loader.template.html";
import css from "./loader.style.css";

class Loader extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		})
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