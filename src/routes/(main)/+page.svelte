<script lang="ts">
	import StyledButton from '$lib/components/styledButton.svelte';
</script>

<main>
	<section class="hero">
		<h3 class="light">Hi! I'm Catus,</h3>
		<h1>a web developer specializing in frontend</h1>
		<p>I create functional and interesting interfaces. Get in touch!</p>
		<a href="#work">
			<StyledButton type="Primary"
				>See my work <img class="icon" src="/Icons/arrow-down-circle.svg" alt="Arrow down" />
			</StyledButton>
		</a>
	</section>

	<section id="work" class="work">asa</section>
</main>

<style>
	section {
		margin: 6rem auto;
	}

	/* Hero */
	.hero {
		width: clamp(50%, 50ch, 95%);
	}
	.hero > * {
		margin: 1.5rem 0;
	}
	.hero > h3 {
		color: var(--clr-primary);
	}
	.hero .icon {
		width: 1.5rem;
	}
	.hero a {
		text-decoration: none;
	}
</style>
