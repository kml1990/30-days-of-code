<script lang="ts">
	import { FeedbackStore } from '../stores';

	$: count = $FeedbackStore.length;
	$: average = $FeedbackStore.reduce((acc, { rating }) => acc + rating, 0) / count || 0;
</script>

<div class="feedback-stats">
	<h4>{count} Reviews</h4>
	<h4>Average Rating: {average.toFixed(2)}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
