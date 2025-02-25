<section aria-labelledby="hAbout" id="about">
	<h2 id="hAbout" class="custom">About me</h2>
	<div class="profile">
		<div class="nametag">
			<img src="/images/avatar.png" alt="Avatar" class="avatar" />
			<p class="name mobile">sutaC</p>
		</div>
		<div class="description">
			<p class="name desktop">sutaC</p>
			<small>
				I'm a full stack developer, but I mainly specialize in frontend. I'm still going to school
				and learning, but programming is my passion and I see my future with it. I started learning
				webdev in 2022 and I have already managed to do some more interesting projects in this
				field, including creating some simple games.
			</small>
		</div>
	</div>
</section>

<style>
	section {
		padding-inline: 1rem;
		max-width: 42rem;
		align-self: center;
	}

	.profile {
		padding: 1rem;
		border-radius: 1rem;
		background: var(--grd-lin-triad);
		display: flex;
		gap: 1rem;
		box-shadow: 0 4px 4px hsla(0, 0%, 0%, 0.2);
	}

	.nametag {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.avatar {
		aspect-ratio: 1;
		border-radius: 100%;
		border: 2px solid var(--clr-secondary);
		box-shadow:
			inset 0 4px 4px hsla(0, 0%, 0%, 0.2),
			0 4px 4px hsla(0, 0%, 0%, 0.2);
	}

	.name {
		text-align: center;
		font-weight: bold;
		font-size: 1.25em;
		text-shadow: 0 4px 4px hsla(0, 0%, 0%, 0.2);
	}

	.name.desktop {
		align-self: start;
	}

	.description {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-wrap: balance;
		gap: 1rem;
		max-width: 65%;
	}
</style>
