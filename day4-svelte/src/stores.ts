import { writable } from 'svelte/store';

export const FeedbackStore = writable([
	{
		id: 1,
		rating: 2,
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.'
	},
	{
		id: 2,
		rating: 8,
		text: 'lore ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.'
	},
	{
		id: 3,
		rating: 6,
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.'
	}
]);
