import template from "../../utils/dom.js";
import css from "./title-bar.style.css";
import html from "./title-bar.template.html";

class TitleBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		})
	}

	connectedCallback() {
		this._title = 'Sedang memuat...';
		this.render();
	}

	set title(title) {
		this._title = title;
		this.render()
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