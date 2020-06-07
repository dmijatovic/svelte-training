import {writable} from 'svelte/store'

import Home from '../pages/Home.svelte'
import About from '../pages/About.svelte'
import ProductIndex from '../pages/product/index.svelte'

import ProductsList from '../pages/product/ProductList.svelte'
import ProductView from '../pages/product/ProductView.svelte'
import ProductEdit from '../pages/product/ProductEdit.svelte'

export default writable([
  {drawer:true, path:"/", label:"Home" , component: Home},
  {drawer:true, path:"/about", label:"About" , component: About},
  {drawer:true, path:"/product", label:"Products" ,
    component: ProductIndex,
    children:[
      {path:"list", label:"Product list" , component: ProductsList, params:false},
      {path:"view/:id", label:"View product" , component: ProductView, params:true},
      {drawer:false, path:"edit/:id", label:"Edit product" , component: ProductEdit, params:true},
    ]
  }
])