<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';

	import { itemList1 } from '../../../../../data';
</script>

<Modal button="Add" title="Add item to list">
	<div class="flex justify-center items-center flex-col gap-6">
		<Button class="w-full" icon="faSearch">Find list</Button>
		<DragList class="w-full gap-4 " data={itemList1}></DragList>
	</div>
</Modal>
