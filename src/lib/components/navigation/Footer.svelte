<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import { onMount } from 'svelte';
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
</script>

<div class="pb-16 pt-32 w-full justify-start items-start gap-8 inline-flex flex-col">
	<Divider full />
	<Fab href="" icon="faArrowUp" on:click={scrollTop} size="lg">Back to <br>top</Fab>
	<Divider></Divider>

	{#if userEmail != null }
	<Title>Get in contact</Title>
	<div class="inline-flex justify-between w-full">
		<Fab href="" icon="faFacebook" iconType="brands"></Fab>
		<Fab href="https://www.instagram.com/jenaissante/" target="_blank" icon="faInstagram" iconType="brands"></Fab>
		<Fab href="" icon="faXTwitter" iconType="brands"></Fab>
		<Fab href="https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g" target="_blank" icon="faYoutube" iconType="brands"></Fab>
	</div>
	<Divider></Divider>
	{/if}
	<Title>Account</Title>
	<Body
	>Manage your bookmarks and lists of your favourite piece of art with an that online museum
	account
	</Body>
	<Button href="/register">Become a member</Button>
	<Divider></Divider>


	<div class="w-full flex justify-between items-center">
		<div class="flex">
			<Link href="">Privacy</Link>
			<Link class="ml-5" href="/terms">Terms</Link>
		</div>
		<span class="text-white/50 items-center flex"
		><Icon icon="faCopyright"></Icon><Body class="text-white/50">2023 Chroma Gallery</Body></span
		>
	</div>
</div>
