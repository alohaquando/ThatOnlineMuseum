<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { count } from '$lib/utils/countItem';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageTitle>Items</PageTitle>

{#if data.items}
	{#if data.items.length === 0}
		<Body class="opacity-80 text-center pt-24">No item added yet</Body>
	{:else}
		<Button class="mb-8 mt-16" icon="faMagnifyingGlass" width="full" href="items/search">
			Search
		</Button>

		<div class="flex justify-between items-center">
			<BodyLarge>Featured</BodyLarge>
			<div class="flex gap-4">
				<Button icon="faPlus" href="/curator/items/add">Add item</Button>
				<Button icon="faPen" href="/curator/items/featured">Manage</Button>
			</div>
		</div>
		<DragList class="mt-6 gap-4" curator items={data.featuredItems}></DragList>

		<div class="mt-16 flex justify-between items-center">
			<BodyLarge>All items</BodyLarge>
			<Body>{count(data.items)}</Body>
		</div>
		<DragList class="gap-4 mt-8" curator items={data.items}></DragList>
	{/if}
{:else}
	<Body class="opacity-80 text-center pt-24">Cannot get items</Body>
{/if}
<FixedButton href="/curator/items/add" icon="faPlus" />
