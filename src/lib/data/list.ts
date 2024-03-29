import {
	addDoc,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
	updateDoc
} from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';
import { redirect } from '@sveltejs/kit';
import type { List } from '$lib/data/dataModels';

export const getUsersAllLists = async (userId: string) => {
	if (userId) {
		try {
			// Reference to the "items" collection
			const listsCollection = collection(db, 'users', userId, 'lists');

			// Fetch all documents in the "items" collection
			const querySnapshot = await getDocs(listsCollection);

			// Extract data from query snapshot
			const listsData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			return listsData;
		} catch (error: any) {
			console.error('Error fetching all lists: ', error.message);
			throw error;
		}
	}
};

export const getUserOneList = async (userId: string, listId: string) => {
	if (userId) {
		try {
			// Reference to the "items" collection
			const listCollection = doc(db, 'users', userId, 'lists', listId);
			const docSnap = await getDoc(listCollection);
			// Fetch all documents in the "items" collection
			// const querySnapshot = await getDocs(listCollection);

			// Extract data from query snapshot
			// const listData = querySnapshot.docs.map((doc) => ({
			// 	id: doc.id,
			// 	...doc.data()
			// }));
			return docSnap.data();
		} catch (error: any) {
			console.error('Error fetching all items: ', error.message);
			throw error;
		}
	}
};
export const handleAddToList = async (userId: string, listId: string, itemId: string) => {
	await setDoc(
		doc(db, 'users', userId, 'lists', listId),
		{
			items: arrayUnion(itemId)
		},
		{ merge: true }
	);
	console.log('Added successfully');
};

export const handleAddMultipleToList = async (userId: string, listId: string, itemId: string[]) => {
	await setDoc(
		doc(db, 'users', userId, 'lists', listId),
		{
			items: arrayUnion(...itemId)
		},
		{ merge: true }
	);
	console.log('Added successfully');
};

export const handleAddToMultipleList = async (
	userId: string,
	listIds: string[],
	itemId: string
) => {
	if (!listIds) {
		return;
	}
	listIds.forEach((listId) => {
		setDoc(
			doc(db, 'users', userId, 'lists', listId),
			{
				items: arrayUnion(itemId)
			},
			{ merge: true }
		);
	});
	console.log('Added successfully');

	window.location.href = '/items/' + itemId;
};

export const handleCreateList = async (
	userId: string,
	title: string = 'My Title',
	description: string = 'My Subtitle'
) => {
	if (!userId || !title || title === '' || description === '' || !description) {
		console.log('Please fill the form');
		return;
	}
	let dataToSetToStore: any;
	const docRef = doc(collection(db, 'users', userId, 'lists'));
	const docSnap = await getDoc(docRef);
	if (!docSnap.exists()) {
		dataToSetToStore = {
			title: title,
			description: description,
			items: []
		};
		const docRef = await addDoc(collection(db, 'users', userId, 'lists'), dataToSetToStore);
		console.log(docRef.id);
		window.location.href = '/account';
	} else {
		const userData = docSnap.data();
		dataToSetToStore = userData;
	}
};

export async function handleDeleteList(userId: string, listId: string) {
	const itemRef = doc(db, 'users', userId, 'lists', listId);
	const itemDoc = await getDoc(itemRef);
	if (itemDoc.exists()) {
		try {
			await deleteDoc(itemRef);
			console.log('Item successfully deleted!');
		} catch (error) {
			console.error('Error deleting item: ', error);
		}

		window.location.href = '/account';
	} else {
		// Document does not exist, handle accordingly
		console.log('Item does not exist.');
	}
}

export async function handleUpdateList(userId: string, listId: string, fieldsToUpdate: object) {
	const listRef = doc(db, 'users', userId, 'lists', listId);

	return await updateDoc(listRef, fieldsToUpdate);
}
