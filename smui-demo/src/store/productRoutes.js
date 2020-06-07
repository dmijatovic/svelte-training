import {writable} from 'svelte/store'

import ProductsList from '../pages/product/ProductList.svelte'
import ProductView from '../pages/product/ProductView.svelte'
import ProductEdit from '../pages/product/ProductEdit.svelte'

export default writable([
  {path:"product/list", label:"Product list" , component: ProductsList, params:false},
  {path:"product/view/:id", label:"View product" , component: ProductView, params:true},
  {path:"product/edit/:id", label:"Edit product" , component: ProductEdit, params:true},
])