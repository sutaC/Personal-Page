<header>
	<div>
		<a href="/" aria-label="See home page"><img src="/MyLogo.svg" alt="Home Page" class="logo" /></a
		>
		<a href="/aboutme" aria-label="See aboute me page">Aboute Me</a>
	</div>
	<div>
		<a href="https://github.com/sutaC" target="_blank" rel="noopener noreferrer">
			<img src="/Icons/github-blank-icon.svg" alt="Github Profile" />
		</a>
		<a
			href="https://discord.com/users/560883480251334666"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/Icons/discord-blank-icon.svg" alt="Discord Profile" />
		</a>
		<a href="mailto:catus.pl@gmail.com" rel="noopener noreferrer">
			<img src="/Icons/mail-blank-icon.svg" alt="Mail" />
		</a>
	</div>
</header>

<slot />

<footer class="small">
	<p>Created by: sutaC</p>
	<p>Contact: catus.pl@gmail.com</p>
</footer>

<!-- Style -->
<style>
	/* Preset */

	@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Signika:wght@300;700&display=swap');

	:root {
		--clr-primary: hsl(255, 95%, 59%);
		--clr-secondary: rgb(158, 126, 251);
		--clr-black-100: hsl(255, 65%, 10%);
		--clr-black-75: hsla(255, 65%, 10%, 0.75);
		--clr-black-50: hsla(255, 65%, 10%, 0.5);
		--clr-black-25: hsla(255, 65%, 10%, 0.25);
		--clr-black-10: hsla(255, 65%, 10%, 0.1);
		--clr-black-5: hsla(255, 65%, 10%, 0.05);
		--clr-error: hsl(0, 95%, 59%);
	}

	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		font-size: 16px;
		font-family: 'Alegreya Sans', sans-serif;
		text-align: center;
		color: var(--clr-black-100);

		scroll-behavior: smooth;
		text-wrap: balance;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		max-width: 100vw;
	}

	:global(h1) {
		font-size: 3.052rem;
	}
	:global(h2) {
		font-size: 2.441rem;
	}
	:global(h3) {
		font-size: 1.953rem;
	}
	:global(h4) {
		font-size: 1.563rem;
	}
	:global(h5) {
		font-size: 1.25rem;
	}
	:global(h6) {
		font-size: 1rem;
	}
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(a) {
		font-family: 'Signika', sans-serif;
		margin: 0;
	}

	:global(p) {
		font-size: 1rem;
		color: var(--clr-black-75);
		margin: 0;
	}
	:global(a) {
		font-weight: bold;
		color: var(--clr-black-100);
	}

	:global(.small) {
		font-size: 0.75rem;
	}
	:global(.light) {
		font-weight: lighter;
	}
	:global(.subtitle) {
		font-size: 1.953rem;
		font-weight: lighter;
		font-family: 'Signika', sans-serif;
		color: var(--clr-primary);
	}

	:global(section) {
		margin: 14rem auto;
	}
	:global(section:first-child) {
		margin-top: 2rem;
	}
	:global(section:last-child) {
		margin-bottom: 4rem;
	}

	/* Main */

	header,
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
	}

	header {
		position: sticky;
		top: 0;
		left: 0;

		z-index: 1;

		border-bottom: 2px solid var(--clr-black-10);
		padding: 0.5rem 1rem;

		background-color: white;

		user-select: none;
	}
	header > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	header img {
		width: 1.25rem;
	}
	.logo {
		width: 2.5rem;
	}

	footer {
		flex-direction: column-reverse;
		gap: 0.5rem;

		border-top: 2px solid var(--clr-black-10);
		padding: 1rem;
	}

	/* Desktop view */
	@media (width >= 650px) {
		:global(html) {
			font-size: 21px;
		}

		:global(h1) {
			font-size: 4.209rem;
		}
		:global(h2) {
			font-size: 3.157rem;
		}
		:global(h3) {
			font-size: 2.369rem;
		}
		:global(h4) {
			font-size: 1.777rem;
		}
		:global(h5) {
			font-size: 1.333rem;
		}
		:global(h6) {
			font-size: 1rem;
		}
		:global(.subtitle) {
			font-size: 2.369rem;
		}

		:global(section) {
			margin: 16rem auto;
		}

		footer {
			flex-direction: row;
		}
	}
</style>
