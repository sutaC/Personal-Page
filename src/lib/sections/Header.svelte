<script lang="ts">
	import { browser } from '$app/environment';

	const scrollBreakpoints: number[] = [];

	if (browser) {
		scrollBreakpoints.push(document.getElementById('about')?.offsetTop || 0);
		scrollBreakpoints.push(document.getElementById('projects')?.offsetTop || 0);
		scrollBreakpoints.push(document.getElementById('technologies')?.offsetTop || 0);
		scrollBreakpoints.push(document.getElementById('contact')?.offsetTop || 0);
	}

	let current: number | null = null;
	let winHeight = 0;

	const handleScroll = () => {
		if (scrollBreakpoints.length === 0) return (current = null);

		const scroll = window.scrollY + winHeight / 2;

		if (scroll >= 0 && scroll < scrollBreakpoints[0]) {
			return (current = null);
		}

		for (let i = 1; i < scrollBreakpoints.length; i++) {
			if (scroll >= scrollBreakpoints[i - 1] && scroll < scrollBreakpoints[i]) {
				return (current = i - 1);
			}
		}

		current = scrollBreakpoints.length - 1;
	};
</script>

<svelte:window on:scroll|passive={handleScroll} bind:innerHeight={winHeight} />

<header>
	<nav>
		<a href="#about" class="navItem" class:current={current === 0}>About</a>
		<a href="#projects" class="navItem" class:current={current === 1}>Projects</a>
		<a href=" " aria-label="Start"><img src="/images/logo.svg" alt="Logo" class="logo" /></a>
		<a href="#technologies" class="navItem" class:current={current === 2}>Technologies</a>
		<a href="#contact" class="navItem" class:current={current === 3}>Contact</a>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		padding: 0.25rem 0.5rem;
		border-bottom: 1px solid;
		border-image: var(--grd-lin-primary) 1;
		box-shadow: 4px 0 4px hsla(0, 0%, 0%, 0.2);
		background-color: var(--clr-background);
		z-index: 99999;
	}

	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.5rem;
	}

	nav > * {
		flex: 1;
		text-align: center;
		max-width: 15ch;
	}

	.logo {
		max-height: 3rem;
		transition: all 200ms ease-out;
	}

	.logo:is(:hover, :focus-visible) {
		scale: 1.05;
		translate: 0 2.5%;
	}

	a {
		font-size: 0.75rem;
		text-decoration: none;
		color: var(--clr-text);
		transition:
			opacity 300ms ease-out,
			border-image 400ms ease-out;
	}

	a.navItem {
		padding-bottom: 0.5rem;
		border-bottom: 1px solid;
		border-image: var(--grd-lin-secondary) 1;
		transition: all 200ms ease-out;
	}

	a.current {
		border-image: var(--grd-lin-triad) 1;
	}

	nav:has(a.navItem:is(:hover, :focus-visible)) a.navItem:not(:hover, :focus-visible) {
		opacity: 0.5;
		border-image: var(--grd-lin-secondary) 1;
		scale: 0.95;
	}

	a.navItem:is(:hover, :focus-within) {
		border-image: var(--grd-lin-triad) 1;
		padding-bottom: 0.3rem;
		scale: 1.05;
	}
</style>
