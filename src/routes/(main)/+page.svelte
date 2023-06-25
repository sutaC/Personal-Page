<script lang="ts">
	import SliderGallery from '$lib/components/sliderGallery.svelte';
	import StyledButton from '$lib/components/styledButton.svelte';
</script>

<main>
	<section class="hero">
		<p class="subtitle">Hi! I'm Catus,</p>
		<h1>a web developer specializing in frontend</h1>
		<p>I create functional and interesting interfaces. Get in touch!</p>
		<a href="#work">
			<StyledButton type="Primary"
				>See my work <img class="icon" src="/Icons/arrow-down-circle.svg" alt="Arrow down" />
			</StyledButton>
		</a>
	</section>

	<section id="work" class="work">
		<h2>Some of my previous works</h2>

		<div>
			<SliderGallery
				backgroundColor="#21092F"
				srcList={[
					'/Images/ss-cardDetails-des.png',
					'/Images/ss-cardDetails-err.png',
					'/Images/ss-cardDetails-suc.png',
					'/Images/img-cardDetails-mob.png'
				]}
			/>

			<a
				href="https://www.frontendmentor.io/solutions/interactive-card-details-form-sveltekit-Qryu3cUA0d"
				class="light small"
				target="_blank"
				rel="noopener noreferrer"
				>https://www.frontendmentor.io/solutions/interactive-card-details-form-sveltekit-Qryu3cUA0d</a
			>
		</div>

		<div>
			<SliderGallery
				backgroundColor="#8B4EC6"
				srcList={['/Images/ss-huddle-des.png', '/Images/img-huddle-mob.png']}
			/>

			<a
				href="https://www.frontendmentor.io/solutions/huddle-landing-page-only-html-and-css-gzkCEGf104"
				class="light small"
				target="_blank"
				rel="noopener noreferrer"
				>https://www.frontendmentor.io/solutions/huddle-landing-page-only-html-and-css-gzkCEGf104</a
			>
		</div>

		<div>
			<SliderGallery
				backgroundColor="#00494D"
				srcList={[
					'/Images/ss-tipCalculator-des.png',
					'/Images/ss-tipCalculator-err.png',
					'/Images/ss-tipCalculator-suc.png',
					'/Images/img-tipCalculator-mob-1.png',
					'/Images/img-tipCalculator-mob-2.png'
				]}
			/>

			<a
				href="https://www.frontendmentor.io/solutions/tip-calculator-app-sveltekit-KtYUWu3vlq"
				class="light small"
				target="_blank"
				rel="noopener noreferrer"
				>https://www.frontendmentor.io/solutions/tip-calculator-app-sveltekit-KtYUWu3vlq</a
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
		<a href="/aboutme">
			<StyledButton
				>See more <img
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
	.cta {
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
