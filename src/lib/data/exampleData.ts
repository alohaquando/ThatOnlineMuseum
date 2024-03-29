import type { Item, Collection, User, List } from '$lib/data/dataModels';

export const item1: Item = {
	id: 'i1',
	image: 'https://practicalpages.files.wordpress.com/2010/02/starry-night-van-gogh.jpg',
	title: 'Starry Night',
	location: 'A1',
	author: 'Vincent van Gogh',
	description: 'A mesmerizing night sky with swirling stars.',
	year: '1889'
};

export const item2: Item = {
	id: 'i2',
	image:
		'https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg',
	title: 'The Persistence of Memory',
	location: 'B2',
	author: 'Salvador Dalí',
	description: 'Melting clocks draped over surreal landscapes.',
	year: '1931'
};

export const item3: Item = {
	id: 'i3',
	image:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
	title: 'Mona Lisa',
	location: 'C3',
	author: 'Leonardo da Vinci',
	description: 'Enigmatic smile captured in a timeless portrait.',
	year: '1503'
};

export const item4: Item = {
	id: 'i4',
	image:
		'https://i2.wp.com/guernicaremakings.com/wp-content/uploads/2017/03/Vasco_Gargalo_Guernica.jpg',
	title: 'Guernica',
	location: 'D4',
	author: 'Pablo Picasso',
	description: 'A powerful anti-war statement depicting tragedy and suffering.',
	year: '1937'
};

export const item5: Item = {
	id: 'i5',
	image: 'https://www.edvardmunch.org/images/paintings/the-scream.jpg',
	title: 'The Scream',
	location: 'E5',
	author: 'Edvard Munch',
	description: 'Iconic representation of existential angst and fear.',
	year: '1893'
};

export let itemList1 = [item1, item2];
export let itemList2 = [item3, item4, item5];
export let allItem: Item[] = [item1, item2, item3, item4, item5];

// Sample Collections
export const collection1: Collection = {
	id: 'c1',
	title: 'Impressionist Wonders',
	description: 'A collection of masterpieces from the Impressionist era.',
	items: ['i1', 'i2', 'i3']
};

export const collection2: Collection = {
	id: 'c2',
	title: 'Modern Art Marvels',
	description: 'Exploring the boundaries of art in the 20th century.',
	items: ['i4', 'i5']
};

export const collection3: Collection = {
	id: 'c3',
	title: 'Timeless Classics',
	description: 'Artworks that have stood the test of time.',
	items: ['i1', 'i3', 'i5']
};

export let allCollection: Collection[] = [collection1, collection2, collection3];

// Sample Users
export const user1: User = {
	uid: 'u1',
	email: 'user1@example.com',
	displayName: 'John Smith',
	lists: ['l1', 'l2'],
	isCurator: false
};

export const user2: User = {
	uid: 'u2',
	email: 'user2@example.com',
	displayName: 'Alice Johnson',
	lists: ['l3'],
	isCurator: true
};

export const user3: User = {
	uid: 'u3',
	email: 'user3@example.com',
	displayName: 'Robert Williams',
	lists: ['l2', 'l3'],
	isCurator: false
};

// Sample Lists
export const list1: List = {
	id: 'l1',
	title: 'Favorites',
	items: ['i1', 'i4'],
	description: 'Personal favorites from different art movements.'
};

export const list2: List = {
	id: 'l2',
	title: 'Must-See',
	items: ['i2', 'i3', 'i5'],
	description: 'Artworks that everyone should experience.'
};

export const list3: List = {
	id: 'l3',
	title: 'Time Travel',
	items: ['i1', 'i4', 'i5'],
	description: 'Journey through different time periods in art history.'
};

export let allList = [list1, list2, list3];

//IBpq1ZYF4KMgaeSDUAQn
// KDaTSHNcH2SJkcMf147K
// bJDqlmgJv7GEYSVUYnv8
// iigbpbzv3ucH9RglZthg
// uYIvhUX8ODUTwaJ6xAYA
