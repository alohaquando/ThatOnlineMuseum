<script lang="ts">
	// noinspection ES6UnusedImports
	import Fa from 'svelte-fa';
	import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
	import Body from '$lib/components/typography/Body.svelte';

	export let isLoading = false;
</script>

<div
	class="fixed w-full h-screen z-50 will-change-transform top-0 left-0 flex items-center justify-center flex-col space-y-6 transition pointer-events-none duration-700 ring-inset {isLoading
		? 'opacity-100 bg-black/80 backdrop-blur-sm'
		: 'opacity-0'}"
>
	<Fa class="text-4xl text-white animate-spin" icon={faSpinnerThird} />
	<Body>{isLoading ? 'Loading...' : ''}</Body>
</div>
