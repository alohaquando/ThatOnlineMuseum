import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent }) => {
	const { session } = await parent();
	const lists = getUsersAllLists(session?.uid as string);
	return {
		lists: await lists
	};
};
