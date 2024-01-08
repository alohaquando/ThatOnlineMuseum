import { getItem } from '$lib/data/item';

// @ts-ignore
export async function load({ params }) {
	return {
		modal: {
			toggled: true,
			title: 'Edit item',
			exit: true
		},
		slug: params.slug,
		item: await getItem(params.slug)
	};
}
