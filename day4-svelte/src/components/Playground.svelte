<script>
	let firstName = 'John';
	let lastName = 'Doe';
	let color = 'red';
	let showText = false;
	let users = [
		{
			id: '1',
			name: 'John Doe'
		},
		{
			id: '2',
			name: 'Sally Doe'
		},
		{
			id: '3',
			name: 'John Smith'
		}
	];

	$: name = firstName + ' ' + lastName;

	const toggle = () => {
		color = 'purple';
	};

	const toggleText = () => {
		showText = !showText;
	};

	const addNewUser = () => {
		users = [
			...users,
			{
				id: '4',
				name: 'Jane Doe'
			}
		];
	};
</script>

<p style="color: {color}">Hello {name}!</p>
<button on:click={() => (color = 'green')}>Button inline</button>
<button on:click={toggle}>Button named</button>

<br />
<br />

{#if showText}
	<p>Text is shown</p>
{/if}

<button on:click={toggleText}>Toggle Text</button>

<br />

{#each users as user}
	<h2>{user.name}</h2>
{/each}

<button on:click={addNewUser}>Add User</button>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
