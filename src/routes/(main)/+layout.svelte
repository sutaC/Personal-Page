<header>
	<div>
		<a href="/"><img src="/MyLogo.svg" alt="Logo" class="logo" /></a>
		<a href="/aboutme">Aboute Me</a>
	</div>
	<div>
		<a href="https://github.com/sutaC" target="_blank" rel="noopener noreferrer">
			<img src="/Icons/github-blank-icon.svg" alt="Github Icon" />
		</a>
		<a
			href="https://discord.com/users/560883480251334666"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/Icons/discord-blank-icon.svg" alt="Discord Icon" />
		</a>
		<a href="mailto:catus.pl@gmail.com">
			<img src="/Icons/mail-blank-icon.svg" alt="Mail Icon" />
		</a>
	</div>
</header>

<slot />

<footer class="small">
	<p>Copyright © 2023 Antoni Siekański All Rights Reserved</p>
	<p>Contact: catus.pl@gmail.com</p>
</footer>

<!-- Style -->
<style>
	/* Preset */

	@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Signika:wght@300;700&display=swap');

	:root {
		--clr-primary: hsl(255, 95%, 59%);
		--clr-secondary: hsl(255, 94%, 74%);
		--clr-black-100: hsl(255, 65%, 10%);
		--clr-black-75: hsla(255, 65%, 10%, 0.75);
		--clr-black-50: hsla(255, 65%, 10%, 0.5);
		--clr-black-25: hsla(255, 65%, 10%, 0.25);
		--clr-black-10: hsla(255, 65%, 10%, 0.1);
		--clr-black-5: hsla(255, 65%, 10%, 0.05);
		--clr-error: hsl(0, 95%, 59%);

		--grad-main: linear-gradient(var(--clr-primary), var(--clr-secondary));
		--grad-gray: linear-gradient(var(--clr-black-75), var(--clr-black-25));
	}

	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		font-size: 16px;
		font-family: 'Alegreya Sans', sans-serif;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		max-width: 100vw;

		text-align: center;
		color: var(--clr-black-100);
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
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(a) {
		font-family: 'Signika', sans-serif;
	}

	:gobal(p) {
		font-size: 1rem;
	}
	:global(a) {
		color: var(--clr-black-100);
		font-weight: bold;
	}

	:global(.light) {
		font-weight: lighter;
	}
	:global(.small) {
		font-size: 0.75rem;
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
		border-bottom: 2px solid var(--clr-black-10);
		padding: 0.5rem 1rem;
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
		position: fixed;
		left: 0;
		bottom: 0;

		flex-direction: column-reverse;
		gap: 0.5rem;

		color: var(--clr-black-75);

		border-top: 2px solid var(--clr-black-10);
		padding: 1rem;
	}
	footer p {
		margin: 0;
	}

	@media (width >= 900px) {
		:global(html) {
			font-size: 21px;
		}

		footer {
			flex-direction: row;
		}
	}
</style>
