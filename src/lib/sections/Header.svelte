<script lang="ts">
	// TODO: changing current
</script>

<header>
	<nav>
		<a href="#projects" class="navItem current">Projects</a>
		<a href="#about" class="navItem">About</a>
		<a href=" " aria-label="Start"><img src="/images/logo.svg" alt="Logo" class="logo" /></a>
		<a href="# " class="navItem">Technologies</a>
		<a href="# " class="navItem">Contact</a>
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
		user-select: none;
	}

	a {
		font-size: 0.75rem; /* mobile small */
		text-decoration: none;
		color: var(--clr-text);
		transition: opacity 300ms ease-out, border-image 400ms ease-out;
	}

	a.navItem {
		padding-bottom: 0.5rem;
		border-bottom: 1px solid;
		border-image: var(--grd-lin-secondary) 1;
	}

	a.current {
		border-image: var(--grd-lin-triad) 1;
	}

	nav:has(a.navItem:is(:hover, :focus-visible)) a.navItem:not(:hover, :focus-visible) {
		opacity: 0.5;
		border-image: var(--grd-lin-secondary) 1;
	}

	a.navItem:is(:hover, :focus-within) {
		border-image: var(--grd-lin-triad) 1;
	}
</style>
