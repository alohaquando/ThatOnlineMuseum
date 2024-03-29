<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';

	export let id: string;
	export let placeholder: string;
	export let name: string;
	export let label: string | undefined = undefined;
	export let labelSize: 'base' | 'lg' | undefined = 'base';
	let labelComponent = Body;
	switch (labelSize) {
		case 'base':
			labelComponent = Body;
			break;
		case 'lg':
			labelComponent = BodyLarge;
			break;
	}
	export let error: boolean = false;
	export let errorMessage: string | undefined = 'Please check this input again';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let autocomplete: string | null | undefined = undefined;
	export let form: string | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let value: string | Date | undefined | null = null;
	export let rows: number = 5;
	let customClass = '';
	export { customClass as class };

	let stateClasses: string;
	if (error) {
		stateClasses = '!border-red-300';
	}

	const clearValue = () => {
		value = '';
	};

	let isFocused: boolean = false;
	const handleInputFocus = () => {
		isFocused = !isFocused;
		console.log(isFocused);
	};

	let focusedClass = '';
	$: isFocused, (focusedClass = isFocused ? 'border-opacity-100' : 'border border-opacity-30');
</script>

<div class="{customClass} flex flex-col w-full relative">
	{#if label}
		<label class="block mb-2 trim-both pb-6" for={id}>
			<svelte:component this={labelComponent}>{label}</svelte:component>
		</label>
	{/if}

	<textarea
		{autocomplete}
		bind:value
		class="{stateClasses} {focusedClass}
		bg-black/30 border border-white/30 rounded-xl placeholder-white/50 block w-full p-2.5 transition outline-none text-white font-sans trim-both focus:ring-white focus:ring-2 disabled:placeholder-white/30 disabled:text-white/70 read-only:focus:ring-0 read-only:text-white/70

		  min-h-[8.875rem] resize-y"
		{disabled}
		{form}
		{id}
		{maxlength}
		{minlength}
		{name}
		on:blur={handleInputFocus}
		on:change
		on:focus={handleInputFocus}
		{placeholder}
		{readonly}
		{required}
		{rows}
	/>
	<!--{#if value && !disabled}-->
	<!--	<Fab on:click={clearValue} size="mini" noOutline icon="faXmark" class="" />-->
	<!--{/if}-->
</div>
{#if error}
	<div class="flex space-x-2 items-center text-red-300 pt-4">
		<Icon icon="faExclamationCircle" />
		<label class="block mb-2 text-sm font-sans trim-both" for={id}>{errorMessage}</label>
	</div>
{/if}

<style>
	::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
</style>
