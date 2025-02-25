<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Technologies from '$lib/sections/Technologies.svelte';
	import CursorFollower from '$lib/components/CursorFollower.svelte';
	import { onMount } from 'svelte';

	// Disables img dragging
	onMount(() => {
		document.querySelectorAll('img').forEach((img) => (img.draggable = false));
	});
</script>

<div class="app">
	<Header />
	<Hero />
	<About />
	<Projects />
	<Technologies />
	<Contact />
	<Footer />
</div>

<CursorFollower />

<style>
	.app {
		display: flex;
		flex-direction: column;
		gap: 5.5rem;
	}

	@media (width >= 500px) {
		.app {
			gap: 10rem;
		}
	}
</style>
