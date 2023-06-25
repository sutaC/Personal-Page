<main>
	<section class="hero">
		<h1>Hi there!</h1>
		<p class="subtitle">I'm Catus, a frontend web developer from Poland.</p>
		<p>
			I specialize in creating functional and visually appealing websites. My passion for crafting
			innovative solutions drives me to constantly learn and grow in this field. I strive to deliver
			high-quality results and exceptional user experiences. If you're in need of a reliable partner
			to collaborate on your project, I'm ready to take action. Feel free to reach out and let me
			know how I can assist you!
		</p>
	</section>

	<section class="cardCollection">
		<h2 class="light">The technology I work with</h2>
		<div class="cardContainer">
			<div class="card">
				<img src="/Icons/Technologies/Javascript-logo.svg" alt="JavaScript" />
				<p>JavaScript</p>
			</div>
			<div class="card">
				<img src="/Icons/Technologies/Typescript-logo.svg" alt="TypeScript" />
				<p>TypeScript</p>
			</div>
			<div class="card">
				<img src="/Icons/Technologies/Svelte-logo.svg" alt="Svelte&nbsp;Kit" />
				<p>Svelte&nbsp;Kit</p>
			</div>
			<div class="card">
				<img src="/Icons/Technologies/React-logo.svg" alt="React" />
				<p>React</p>
			</div>
			<div class="card">
				<img src="/Icons/Technologies/Figma-logo.svg" alt="Figma" />
				<p>Figma</p>
			</div>
			<div class="card">
				<img src="/Icons/Technologies/Git-logo.svg" alt="Git" />
				<p>Git</p>
			</div>
		</div>
	</section>

	<section class="contactList">
		<h2>Where can you find me?</h2>
		<p class="subtitle">Where to Find My Work and Get in Touch</p>
		<ul>
			<li>
				<a href="mailto:catus.pl@gmail.com" rel="noopener noreferrer"
					><img src="/Icons/Contact/Gmail-logo.svg" alt="Gmail" />Mail</a
				>
			</li>
			<li>
				<a
					href="https://discord.com/users/560883480251334666"
					target="_blank"
					rel="noopener noreferrer"
					><img src="/Icons/Contact/Discord-logo.svg" alt="Discord" />Discord</a
				>
			</li>
			<li>
				<a href="https://github.com/sutaC" target="_blank" rel="noopener noreferrer"
					><img src="/Icons/Contact/Github-logo.svg" alt="Github" />GitHub</a
				>
			</li>
			<li>
				<a
					href="https://www.frontendmentor.io/profile/sutaC"
					target="_blank"
					rel="noopener noreferrer"
					><img
						src="/Icons/Contact/Frontend-mentor-logo.svg"
						alt="Frontend&nbsp;Mentor"
					/>Frontend&nbsp;Mentor</a
				>
			</li>
		</ul>
	</section>
</main>

<style>
	/* General */
	.hero,
	.contactList {
		width: clamp(50%, 50ch, 95%);
	}
	.hero > *,
	.contactList > * {
		margin: 1rem 0;
	}

	/* Card Collection */
	.cardCollection {
		width: 90%;
	}
	.cardCollection > * {
		margin: 4rem 0;
	}
	.cardContainer {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 5%;
		flex-wrap: wrap;
	}
	.card {
		flex: 1;

		margin: 1rem 0;
		padding: 1rem;

		border-radius: 8px;
		box-shadow: 0.125rem 0.125rem 0.25rem var(--clr-black-25);
		background-color: var(--clr-black-10);
	}
	.card > p {
		color: var(--clr-black-100);
		font-weight: bold;
		margin: 0.5rem 0;
	}
	.card > img {
		height: 4rem;
		margin: 0.5rem 0;
	}
	.card:hover {
		opacity: 0.75;
	}

	/* Contact List */
	.contactList {
		text-align: left;
	}
	.contactList > ul {
		margin: 3rem 0;
		list-style: none;
		text-align: left;
		padding-left: 1.5rem;
	}
	.contactList li {
		margin: 1.5rem 0;
	}
	.contactList img {
		width: 1.5rem;
	}
	.contactList a {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 1.25rem;
		width: fit-content;
	}
</style>
