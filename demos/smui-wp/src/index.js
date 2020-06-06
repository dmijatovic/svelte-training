import './styles/global.scss'
import App from './App.svelte';
import TestPage from './pages/TestPage.svelte'

const app = new App({
	target: document.body
});

// const app = new TestPage({
// 	target: document.body
// });

export default app;