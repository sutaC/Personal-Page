<section id="contact" aria-labelledby="hContact">
	<h2 id="hContact" class="custom">Contact</h2>
	<small class="subscript">Where to Find My Work and Get in Touch</small>

	<ul>
		<li>
			<a
				href="https://discord.com/users/560883480251334666"
				target="_blank"
				rel="noopener noreferrer">Discord: <span class="highlight">sutac_pl</span></a
			>
		</li>
		<li>
			<a href="mailto:contact@sutac.pl">Mail: <span class="highlight">contact@sutac.pl</span></a>
		</li>
		<li>
			<a href="https://github.com/sutaC" target="_blank" rel="noopener noreferrer"
				>Github: <span class="highlight">sutaC</span></a
			>
		</li>
		<li>
			<a
				href="https://www.frontendmentor.io/profile/sutaC"
				target="_blank"
				rel="noopener noreferrer">Frontend Mentor: <span class="highlight">sutaC</span></a
			>
		</li>
	</ul>
</section>

<style>
	.subscript {
		text-align: center;
		width: 100%;
		display: block;
		margin: 1rem 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
		position: relative;
		isolation: isolate;
		overflow: hidden;
		border-radius: 1rem;
	}

	li a {
		width: 10rem;
		aspect-ratio: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: var(--grd-rad-secondary);
		color: var(--clr-text);
		cursor: pointer;
		box-shadow: 0 4px 4px #0003;
		z-index: 1;
		transition: all 200ms ease-out;
		text-decoration: none;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
	}

	li:is(:hover, :focus-visible, :focus-within)::before {
		content: '';
		position: absolute;
		display: block;
		left: 50%;
		top: 50%;
		width: 100%;
		aspect-ratio: 1;
		background: var(--grd-rad-primary);
		z-index: -1;
		translate: -50% -50%;
		border-radius: 10;
		animation: fadeIn 200ms ease-in;
	}

	li:is(:hover, :focus-visible, :focus-within) a {
		scale: 1.05;
		translate: 0 -1.5%;
	}

	li a .highlight {
		font-size: 0.85rem;
		word-break: break-all;
		padding: 0.125em;
		margin: 0.25em;
		border-radius: 0.25rem;
		color: var(--clr-accent);
		text-decoration: none;
	}
</style>
