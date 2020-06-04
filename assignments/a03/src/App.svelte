<script>

	import Product from './Product.svelte'
	import Modal from './Modal.svelte'

	const item={
		title:"A book spread as object",
		subtitle:"This is my subtitle",
		desc:`This is long description`
	}

	function addToCart({detail}){
		console.log("Add to cart...", detail)
	}

	function forSelling({detail}){
		console.log("Offer for sale...", detail)
	}

</script>

<style>
	
</style>

<h1>Books</h1>

<Product
	{...item}
	on:add-to-cart={addToCart}
	on:for-selling={forSelling}
/>


<Modal class="modal-main">
	<h2 slot="header">This is my header</h2>
	<p>
		What about this one? This should go into default!
	</p>
	<div slot="footer">This is my footer content</div>
</Modal>
