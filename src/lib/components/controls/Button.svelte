<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let hover: boolean = true;
	let hoverEffect = '';
	if (hover) {
		hoverEffect = 'hover:bg-white/40 hover:text-gray-900 hover:before:opacity-100 hover:after:opacity-100';
	}
	export let destructive: boolean = false;
	if (destructive) {
		hoverEffect = 'text-red-500';
	}
	export let icon: string | undefined = undefined;
	export let width: 'fit' | 'full' = 'fit';
	export let design: 'filled' | 'outlined' = 'outlined';
	export let type: 'button' | 'submit' | 'reset' | undefined = 'button';
	export let disabled: boolean = false;
	export let href: string | undefined = undefined;
	export let iconType: string | undefined = 'regular';
	export let iconSize = '';
	let customClasses = '';
	export { customClasses as class };
	let widthClasses: string;
	switch (width) {
		case 'fit': {
			widthClasses = 'w-fit';
			break;
		}
		case 'full': {
			widthClasses = 'w-full';
			break;
		}
	}

	let designClasses: string;
	switch (design) {
		case 'outlined': {
			designClasses = 'border border-white border-opacity-30';
			break;
		}
		case 'filled': {
			designClasses = 'bg-white text-gray-900 active:bg-white/80 hover:bg-white/70';
		}
	}
</script>

<svelte:element
	class="px-5 rounded-full inline-flex items-center backdrop-blur-sm justify-center gap-2 overflow-visible ease-out duration-300 h-10 line-clamp-1

disabled:text-white/50 disabled:hover:before:opacity-0 disabled:hover:after:opacity-0
disabled:hover:bg-transparent

        {widthClasses} {designClasses} {customClasses} {hoverEffect}

        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-transparent to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-black/40 via-white/60 to-white before:rounded-full before:blur-sm before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
	{disabled}
	{href}
	on:click
	on:keydown
	role="button"
	tabindex="0"
	this={href ? 'a' : 'button'}
	{type}
>
	<Icon {icon} size={iconSize} type={iconType} />
	{#if $$slots.default}
		<Body class="inline-flex items-center">
		<slot />
		</Body>
	{/if}
</svelte:element>
