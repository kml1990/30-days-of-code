<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import RatingSelect from './RatingSelect.svelte';
	import { FeedbackStore } from '../stores';

	let text = '';
	let rating = 10;
	let btnDisabled = true;
	let min = 10;
	let message: string | null;

	const handleInput = (e) => {
		btnDisabled = text.trim().length <= min;
		message = btnDisabled ? `Text must be at least ${min} characters long` : null;
	};

	const handleSelect = (e) => {
		rating = e.detail;
	};

	const handleSubmit = (e) => {
		if (!btnDisabled) {
			const newFeedback = {
				id: uuidv4(),
				rating: +rating,
				text
			};

			FeedbackStore.update((currentFeedback) => [newFeedback, ...currentFeedback]);

			text = '';
			rating = 10;
		}
	};
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				on:input={handleInput}
				bind:value={text}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button type="submit" disabled={btnDisabled}>Send</Button>
		</div>
		{#if message}
			<div class="message">
				{message}
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}

	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
