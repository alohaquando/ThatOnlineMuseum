import { fail, redirect } from '@sveltejs/kit';
import { handleAddToList } from '$lib/data/list';
import { handleCreateItem } from '$lib/data/item';

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();

		const author = formData.get('artist') as string;
		const description = formData.get('desc') as string;
		const image: any = formData.get('image') as string;
		const isFeatured = false;
		const location = formData.get('location') as string;
		const title = formData.get('name') as string;
		const year = formData.get('time') as string;

		console.log(image);

		let result;

		try {
			result = await handleCreateItem(
				author,
				description,
				image,
				isFeatured,
				location,
				title,
				year
			);
		} catch (error) {
			return fail(400, {
				message: error.message
			});
		}

		throw redirect(300, `/curator/items/${result.id}`);
	}
};

export let ssr = false;
