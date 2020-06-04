<script>
	let password=""

	let passwords=[]

	function addPassword(){
		passwords=[
			...passwords,
			password
		]
		password=""
	}

	function removeItem(value){
		// console.log("removeItem...", index)
		passwords = passwords.filter(pass=>pass!==value)
	}

	$:tooShort = password!="" && password.length<5
	$:tooLong = password.length>10

</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>Add a password input field and save the user input in a variable.</li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<h2>Solution</h2>

<section>
	<input type="password" bind:value={password}>
	<button on:click={addPassword}>Add password</button>
	{#if tooShort}
		<h3>Password is too short</h3>
	{/if}
	{#if tooLong}
		<h3>Password is too long</h3>
	{/if}
</section>
<section>
	<ul>
	{#each passwords as pass,index (pass)}
		<li on:click={()=>{removeItem(pass)}}>{pass}</li>
	{/each}
	</ul>
</section>