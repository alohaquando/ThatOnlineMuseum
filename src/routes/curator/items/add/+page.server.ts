import { fail, redirect } from '@sveltejs/kit';
import { handleCreateItem } from '$lib/data/item';

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();

		const author = formData.get('artist') as string;
		const description = formData.get('desc') as string;
		const imageUrl: any = formData.get('imageUrl') as string;
		const isFeatured = false;
		const location = formData.get('location') as string;
		const title = formData.get('name') as string;
		const year = formData.get('time') as string;

		if (imageUrl === '') {
			return fail(400, {
				message: 'Please add an image'
			});
		}

		let result;

		try {
			result = await handleCreateItem(
				author,
				description,
				imageUrl,
				isFeatured,
				location,
				title,
				year
			);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/items/${result.id}`);
	}
};

export let ssr = false;
