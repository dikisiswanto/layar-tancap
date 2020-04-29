export default function template(html, css) {
	const template = document.createElement('template');
	template.innerHTML = `
		<style>
		${css}
		</style>
		${html}
	`;
	return document.importNode(template.content, true);
}