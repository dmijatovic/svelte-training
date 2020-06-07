import {writable} from 'svelte/store'

import Home from '../pages/Home.svelte'
import About from '../pages/About.svelte'
import ProductsOverview from '../pages/ProductsOverview.svelte'

export default writable([
  {path:"/", label:"Home" , component: Home},
  {path:"/about", label:"About" , component: About},
  {path:"/product", label:"Products" , component: ProductsOverview},
])