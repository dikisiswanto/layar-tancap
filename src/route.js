import {Router} from '@vaadin/router';

const outlet = document.querySelector('#layar-tancap-app');
const router = new Router(outlet);
const routes = [{
		path: '/',
		action: import('Pages/home/home'),
		component: 'home-page'
	},
	{
		path: 'movie/(genre|search)/:query',
		action: import('Pages/discover/discover'),
		component: 'discover-page'
	},
	{
		path: 'movie/([0-9]+)',
		action: import('Pages/detail/detail'),
		component: 'detail-page'
	},
	{
		path: '(.*)',
		redirect: '/'
	}
];
router.setRoutes(routes);