<script lang="ts">
	import Block from '$lib/components/block/Block.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import type { Item } from '../../../model';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function onDelete() {
		dispatch('delete');
	}

	let customClass = '';
	export { customClass as class };

	let animationClass = '';
	export let type: 'checkbox' | 'edit' | 'view' = 'checkbox';
	switch (type) {
		case 'checkbox':
			break;
		case 'edit':
			animationClass = 'animate-flyRight40';
			break;
		case 'view':
			break;
	}
	export let data: Item;
</script>

<div class="{customClass} w-full h-auto flex items-center gap-4 overflow-hidden">
	{#if type === 'edit'}
		<Fab on:click={onDelete} icon="faMinus" size="mini" hover={false}
				 class="{animationClass} shrink-0 text-red-500 !border-red-500"></Fab>
	{/if}
	<Block alt="{data.title}" class="{animationClass} rounded-lg shrink-0 !h-16 !w-16" icon src="{data.src}"></Block>
	<div class="{animationClass} w-full gap-y-3 flex flex-col">
		<Body>{data.title}</Body>
		<Body class="opacity-50">{data.subtitle}</Body>
	</div>
	{#if type === 'checkbox'}
		<Checkbox class="shrink-0" id={data.id} name="{data.title}"></Checkbox>
	{:else if type === 'edit'}
		<Icon icon="faEquals" class="shrink-0 w-6 h-6" />
	{/if}
</div>