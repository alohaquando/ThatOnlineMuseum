<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let root: HTMLElement;

	onMount(() => {
		root = document.body.parentNode as HTMLElement;
	});

	const scrollTop = () => {
		root.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	// let userEmail;
	// let userName;
	// const authen = getAuth();
	// onAuthStateChanged(authen, (user) => {
	// 	if (user) {
	// 		console.log(user);
	// 		userName = user.displayName;
	// 		userEmail = user.email;
	// 	} else {
	// 		console.log('Not sign in');
	// 	}
	// 	console.log(userEmail)
	// });

	export let loggedIn: boolean = false;
</script>

<div class="pb-16 pt-32 w-full justify-start items-start gap-8 inline-flex flex-col">
	<Divider full />

	<!--	Back to top button-->
	<Fab href="" icon="faArrowUp" on:click={scrollTop} size="lg">Back to <br />top</Fab>
	<Divider></Divider>

	<!--	Social media-->
	<Title>Get in contact</Title>
	<div class="inline-flex justify-between w-full">
		<Fab href="https://facebook.com" icon="faFacebook" iconType="brands" target="_blank"></Fab>
		<Fab href="https://www.instagram.com/" icon="faInstagram" iconType="brands" target="_blank"
		></Fab>
		<Fab href="https://twitter.com" icon="faXTwitter" iconType="brands" target="_blank"></Fab>
		<Fab href="https://www.youtube.com" icon="faYoutube" iconType="brands" target="_blank"></Fab>
	</div>

	<Divider />

	{#if loggedIn}
		<!--	Account-->
		<Title>Account</Title>
		<Body
			>Manage your bookmarks and lists of your favourite piece of art with an that online museum
			account
		</Body>
		<Button href="/account/sign-up">Become a member</Button>

		<Divider />
	{/if}

	<!--	Curator site-->
	{#if $page.url.pathname.startsWith('/curator')}
		<Title>Chroma Gallery</Title>
		<Body>View beautiful artworks on Chroma Gallery</Body>
		<Button href="/">Go to Chroma Gallery</Button>
	{:else}
		<Title>Chroma Curator</Title>
		<Body>Manage items and collections on Chroma Gallery using a Curator account</Body>
		<Button href="/curator/items">Go to Chroma Curator</Button>
	{/if}

	<Divider />

	<!--	Privacy and Terms-->
	<div class="w-full flex justify-between items-center">
		<div class="flex">
			<Link href="/privacy-policy">Privacy</Link>
			<Link class="ml-5" href="/terms">Terms</Link>
		</div>
		<span class="text-white/50 items-center flex cursor-default"
			><Icon icon="faCopyright"></Icon><Body class="text-white/50">2023 Chroma Gallery</Body></span
		>
	</div>
</div>
