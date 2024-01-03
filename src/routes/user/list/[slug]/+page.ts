import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent, params }) => {
	const { session } = await parent();
	const lists = getUsersAllLists(session?.uid);
	return {
		lists: await lists,
		param: params.slug
	};
};
