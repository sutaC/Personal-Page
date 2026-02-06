<section id="technologies" aria-labelledby="hTechnologies">
	<h2 id="hTechnologies" class="custom">Technologies</h2>
	<ul>
		<li><img src="/images/technologies/HTML.png" alt="HTML" /><small class="name">HTML</small></li>
		<li><img src="/images/technologies/CSS.png" alt="CSS" /><small class="name">CSS</small></li>
		<li>
			<img src="/images/technologies/JavaScript.png" alt="JavaScript" /><small class="name"
				>JavaScript</small
			>
		</li>
		<li>
			<img src="/images/technologies/TypeScript.png" alt="TypeScript" /><small class="name"
				>TypeScript</small
			>
		</li>
		<li>
			<img src="/images/technologies/Python.svg" alt="Python" /><small class="name">Python</small>
		</li>
		<li>
			<img src="/images/technologies/JSDoc.png" alt="JSDoc" /><small class="name">JSDoc</small>
		</li>
		<li><img src="/images/technologies/PWA.png" alt="PWA" /><small class="name">PWA</small></li>
		<li>
			<img src="/images/technologies/Svelte.png" alt="Svelte" /><small class="name">Svelte</small>
		</li>
		<li>
			<img src="/images/technologies/React-js.png" alt="React.js" /><small class="name"
				>React.js</small
			>
		</li>
		<li>
			<img src="/images/technologies/Next-js.png" alt="Next.js" /><small class="name">Next.js</small
			>
		</li>
		<li>
			<img src="/images/technologies/SQLite.svg" alt="SQLite" /><small class="name">SQLite</small>
		</li>
		<li>
			<img src="/images/technologies/MySQL.png" alt="MySQL" /><small class="name">MySQL</small>
		</li>
		<li>
			<img src="/images/technologies/MongoDB.png" alt="MongoDB" /><small class="name">MongoDB</small
			>
		</li>
		<li>
			<img src="/images/technologies/Node-js.png" alt="Node.js" /><small class="name">Node.js</small
			>
		</li>
		<li>
			<img src="/images/technologies/Express-js.png" alt="Express.js" /><small class="name"
				>Express.js</small
			>
		</li>
		<li>
			<img src="/images/technologies/Flask.svg" alt="Flask" /><small class="name">Flask</small>
		</li>
		<li><img src="/images/technologies/HTMX.png" alt="HTMX" /><small class="name">HTMX</small></li>
		<li>
			<img src="/images/technologies/Figma.png" alt="Figma" /><small class="name">Figma</small>
		</li>
	</ul>
</section>

<style>
	ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: auto;
		padding: 1rem;
		margin: 0;
		align-items: center;
		gap: 1rem;
		border-top: 2px solid;
		border-bottom: 2px solid;
		border-image: var(--grd-lin-triad) 1;
	}

	li {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 8rem;
		flex-shrink: 0;
		aspect-ratio: 1;
		list-style: none;
		background: var(--grd-rad-triad);
		border-radius: 1rem;
		box-shadow: 0 4px 4px #0003;
	}

	li img {
		display: block;
		border-radius: 100%;
		width: 2.75rem;
		aspect-ratio: 1;
		background: var(--clr-secondary);
		object-fit: contain;
		border: 1px solid var(--clr-secondary);
	}

	li .name {
		position: absolute;
		left: 0;
		width: 100%;
		bottom: 0.5rem;
		text-align: center;
	}

	@media (width >= 500px) {
		ul {
			flex-wrap: wrap;
			overflow: hidden;
			justify-content: center;
			border: none;
			max-width: 60rem;
			margin: auto;
		}
	}
</style>
