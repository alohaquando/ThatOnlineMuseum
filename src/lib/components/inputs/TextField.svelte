<!--suppress ALL -->
<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';

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
	// export let icon: string | undefined = undefined;
	export let type:
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'month'
		| 'number'
		| 'password'
		| 'range'
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week' = 'text';
	export let required: boolean = false;
	let requiredClass = required ? ' after:text-3xl after:absolute after:-right-4 after:-top-2' : '';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let autocomplete: string | null | undefined = undefined;
	export let form: string | undefined = undefined;
	export let min: number | any | undefined = undefined;
	export let max: number | any | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let pattern: any | undefined = undefined;
	export let size: number | undefined = undefined;
	export let value: string | undefined | null = null;

	let stateClasses: string;
	$: if (error) {
		stateClasses = '!border-red-300';
	} else {
		stateClasses = '';
	}

	let customClass = '';
	export { customClass as class };
</script>

<div class="{customClass} flex flex-col w-full relative">
	{#if label}
		<label class="relative w-fit block mb-2 trim-both pb-6 {requiredClass}" for={id}>
			<svelte:component this={labelComponent}>{label}</svelte:component>
		</label>
	{/if}
	<input
		{...{ type }}
		{autocomplete}
		bind:value
		class="{stateClasses} bg-black/30 border border-white/30 rounded-xl placeholder-white/50 block w-full p-2.5 transition outline-none text-white font-sans trim-both focus:ring-white focus:ring-2 disabled:placeholder-white/30 disabled:text-white/70 read-only:focus:ring-0 read-only:text-white/70"
		{disabled}
		{form}
		{id}
		{max}
		{maxlength}
		{min}
		{minlength}
		{name}
		on:blur
		on:change
		on:input
		{pattern}
		{placeholder}
		{readonly}
		{required}
		{size}
	/>
	{#if error}
		<div class="flex space-x-2 items-center text-red-300 pt-4">
			<Icon icon="faExclamationCircle" />
			<label class="block mb-2 text-sm font-sans trim-both" for={id}>{errorMessage}</label>
		</div>
	{/if}
</div>

<style>
	::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
</style>
