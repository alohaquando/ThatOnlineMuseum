<script lang="ts">
	import type { Item } from '../../../model';

	export let id: string;
	export let name: string;
	export let value: string;
	export let checked: boolean = false;
	import Icon from '$lib/components/iconography/Icon.svelte';

	let customClass = '';
	export { customClass as class };

	export let data: Item | undefined;
	if (data) {
		id = data.id;
	}
</script>

<div class="{customClass} inline-flex items-center group justify-center">
	<label class="absolute p-5" for="{id}"></label>
	<label class="relative flex items-center justify-center rounded-full cursor-pointer group-hover:bg-white/30"
				 for={id}>
		<input
			{checked}
			class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white/50 transition-all checked:bg-white"
			id={id}
			{name}
			type="radio"
			{value}
		/>

		<!-- Icon span	-->
		<span
			class="absolute text-black transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100"
		>
			<Icon icon="faCheck" size="sm" type="solid"></Icon>
		</span>
	</label>
</div>
<!-- use this format below for multiple radios btn. *note using same "name" different "id" -->
<!-- <Radio id="1" name="1"></Radio>
    <Radio id="2" name="1"></Radio> -->
