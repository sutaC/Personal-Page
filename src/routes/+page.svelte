<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Technologies from '$lib/sections/Technologies.svelte';
</script>

<div class="app">
	<Header />
	<Hero />
	<Projects />
	<About />
	<Technologies />
	<Contact />
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
</style>
