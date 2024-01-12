import { error, fail, redirect } from '@sveltejs/kit';
import { handleUpdateCollection } from '$lib/data/collection';
import { handleUpdateList } from '$lib/data/list';

export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const listId: string = formData.get('listId') as string;
		const itemList = formData.get('itemList');
		const userId = formData.get('userId');
		try {
			function splitAndCreateArray(itemList) {
				if (itemList.length > 0) return itemList.split(',');
				return [];
			}

			const resultArray = splitAndCreateArray(itemList);
			await handleUpdateList(userId, listId, {
				items: resultArray
			});
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/list/${listId}`);
	}
};

export let ssr = false;
