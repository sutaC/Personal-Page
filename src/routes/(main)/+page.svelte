<script lang="ts">
	import SliderGallery from '$lib/components/sliderGallery.svelte';
	import StyledButton from '$lib/components/styledButton.svelte';
</script>

<main>
	<section class="hero">
		<p class="subtitle">Hi! I'm sutaC,</p>
		<h1>a web developer specializing in frontend,</h1>
		<p>but the backend doesn't scare me! I create functional interfaces, so get in touch!</p>
		<a href="#work" aria-label="See my portfolio">
			<StyledButton type="Primary"
				>See my work <img class="icon" src="/Icons/arrow-down-circle.svg" alt="Arrow down" />
			</StyledButton>
		</a>
	</section>

	<section id="work" class="work">
		<h2>Some of my previous works</h2>

		<div>
			<SliderGallery
				backgroundColor="#38303B"
				srcList={[
					'/Images/img-connect4-1.png',
					'/Images/img-connect4-2.png',
					'/Images/img-connect4-3.png',
					'/Images/img-connect4-4.png'
				]}
			/>

			<a
				href="https://sutac-connect4.netlify.app/"
				class="light small"
				target="_blank"
				rel="noopener noreferrer">Connect4</a
			>
		</div>

		<div>
			<SliderGallery
				backgroundColor="#1B182D"
				srcList={[
					'/Images/img-snakegame-1.png',
					'/Images/img-snakegame-2.png',
					'/Images/img-snakegame-3.png'
				]}
			/>

			<a
				href="https://sutac.github.io/Snake-game/"
				class="light small"
				target="_blank"
				rel="noopener noreferrer">Snake game</a
			>
		</div>
	</section>

	<section class="cta">
		<p class="subtitle">Interested in getting in touch?</p>
		<h2>Visit the About Me section!</h2>
		<p>
			There you'll find information about my experience in web development and interface design. If
			you're interested in collaboration or have any questions, feel free to contact me using the
			provided contact details. I look forward to hearing from you!
		</p>
		<a href="/aboutme" aria-label="See aboute me page">
			<StyledButton
				>See more<img
					src="/Icons/arrow-right-circle.svg"
					alt="Arrow right"
					class="icon"
				/></StyledButton
			>
		</a>
	</section>
</main>

<style>
	/* General */
	.icon {
		width: 1.5rem;
	}

	.hero,
	.cta,
	.work a {
		width: clamp(50%, 50ch, 95%);
	}
	.hero > *,
	.cta > * {
		margin: 1rem 0;
	}

	.hero > a,
	.cta > a {
		text-decoration: none;
	}

	/* Work */
	.work > * {
		margin: 8rem 0;
	}

	/* Footer CTA */
	.cta {
		text-align: left;
	}
</style>
