import Main from './components/main.svelte'
import Login from './components/login.svelte'
import Error404 from './components/error.svelte'

const routes = {
    '/': Main,
    '/login': Login,
    '/404': Error404
};

export default routes;