import {writable} from 'svelte/store'

const headerStore=writable({
  title:"Food advisor demo",
  subtitle:"Healty food for toughts!"
})

export default headerStore