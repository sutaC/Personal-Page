<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Contact from '$lib/sections/Contact.svelte';
</script>

<div class="app">
	<Header />
	<Hero />
	<Projects />
	<About />

	<p>
		Saepe eum odit maxime adipisci voluptas laboriosam voluptatem doloremque ut laborum magni
		beatae, at suscipit, mollitia quasi assumenda sit maiores exercitationem culpa ipsum ipsam
		laudantium nihil quaerat? Recusandae, facere est!
	</p>
	<p>
		Velit vitae tempore est assumenda, quidem dolorum saepe natus perferendis amet iure illo
		voluptatem recusandae similique consectetur eveniet expedita. Ipsa blanditiis maxime dignissimos
		ullam saepe. Ducimus fugiat excepturi perspiciatis amet!
	</p>
	<p>
		Accusamus iste magni at numquam commodi voluptatum sequi laboriosam delectus laudantium dolorum
		quos, dicta quibusdam excepturi deleniti exercitationem quia doloremque, nesciunt ipsam, nisi
		rerum quaerat? Culpa itaque fugiat neque eligendi.
	</p>

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
