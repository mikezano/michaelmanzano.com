import Vue from 'vue';
import Router from 'vue-router';
import Test from './views/Test.vue';
import Zano from './views/Zano.vue';

Vue.use(Router);

export default new Router({
  routes: [
	{
		path: '/',
		name: 'Home',
		component: Zano,
	},
	{
		path: '/test',
		name: 'test',
		component: Test,
	},
  ],
});
