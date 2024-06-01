<script lang="ts">
	type ProjectData = {
		name: string;
		description: string;
		link: string;
	};

	const projects: ProjectData[] = [
		{
			name: 'Connect4',
			link: 'https://connect4.sutac.pl/',
			description:
				'Connect4 is a project aimed at implementing the classic game of the same name using web technologies.'
		},
		{
			name: 'Snake',
			link: 'https://snake.sutac.pl/',
			description:
				'The project is a classic Snake game running on its own game engine. It is a web application with a custom design'
		},
		{
			name: 'GwiazdyZSI',
			link: 'https://gwiazdyzsi.sutac.pl/',
			description:
				'Gwiazdy ZSI (ZSI Stars) is an original project aimed at storing and categorizing photos of teachers from ZSI. The application allows you to browse photos and search for them according to the teachers appearing in them.'
		},
		{
			name: 'Chartex',
			link: 'https://chartex.sutac.pl/',
			description: 'A simple web application project for dynamic chart visualisation.'
		},
		{
			name: 'GameOfLife',
			link: 'https://sutac.github.io/GameOfLife/',
			description: "A simple implementation of Conway's Game of Life."
		},
		{
			name: 'Renderer3D',
			link: 'https://renderer.sutac.pl/',
			description:
				'This is a project that explores 3D rendering. It allows you to draw 3D objects loaded from .obj files and provides a simple engine for creating interactive experiences.'
		},
		{
			name: 'TheAIQuill',
			link: 'https://theaiquill.site/',
			description:
				'Blog written by AI made in Next.js. During the collaboration, I focused on the design and frontend of the website'
		}
	];

	let current = 0;
</script>

<section id="projects" aria-labelledby="hProjects">
	<h2 class="custom" id="hProjects">Projects</h2>

	<div class="display">
		<div class="projectItem">
			<input type="radio" name="project" id="prjConnect4" checked on:input={() => (current = 0)} />
			<label for="prjConnect4" data-name="Connect4">
				<img src="/images/projects/Connect4.png" alt="Connect4" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjSnake" on:input={() => (current = 1)} />
			<label for="prjSnake" data-name="Snake">
				<img src="/images/projects/Snake.svg" alt="Snake" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjGwiazdyZSI" on:input={() => (current = 2)} />
			<label for="prjGwiazdyZSI" data-name="GwiazdyZSI">
				<img src="/images/projects/GwiazdyZSI.png" alt="GwiazdyZSI" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjChartex" on:input={() => (current = 3)} />
			<label for="prjChartex" data-name="Chartex">
				<img src="/images/projects/Chartex.svg" alt="Chartex" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjGameOfLife" on:input={() => (current = 4)} />
			<label for="prjGameOfLife" data-name="GameOfLife">
				<img src="/images/projects/GameOfLife.svg" alt="GameOfLife" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjRenderer3D" on:input={() => (current = 5)} />
			<label for="prjRenderer3D" data-name="Renderer3D">
				<img src="/images/projects/Renderer3D.svg" alt="Renderer3D" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjTheAIQuill" on:input={() => (current = 6)} />
			<label for="prjTheAIQuill" data-name="TheAIQuill">
				<img src="/images/projects/TheAIQuill.png" alt="TheAIQuill" />
			</label>
		</div>
	</div>

	<div class="showcase">
		<a href={projects[current].link} target="_blank" rel="noopener noreferrer"
			>{projects[current].name}</a
		>
		<small class="description">{projects[current].description}</small>
	</div>

	<small class="other">
		I have also done many smaller projects which you can check out with my <a
			href="https://github.com/sutaC"
			target="_blank"
			rel="noopener noreferrer"
			class="custom">Frontend Mentor</a
		>
		and on my
		<a href="https://github.com/sutaC" target="_blank" rel="noopener noreferrer" class="custom"
			>Github</a
		>
	</small>
</section>

<style>
	section {
		width: 100%;
		padding: 1rem;
		max-width: 45rem;
		margin: auto;
	}

	.display {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.projectItem {
		flex: 100px;
		max-width: 100px;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 4px 4px hsla(0, 0%, 0%, 0.2);
		background: var(--grd-rad-primary);
		border: 2px solid var(--clr-secondary);
		transition: all 200ms ease-out;
		isolation: isolate;
		z-index: 0;
	}

	.projectItem label {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.projectItem input {
		display: none;
	}

	.projectItem img {
		user-select: none;
		width: 100%;
		transition: filter 200ms ease-out;
	}

	.projectItem:is(:hover, :focus-visible) img {
		filter: blur(4px) brightness(75%);
	}

	.projectItem:has(:checked) {
		border-color: var(--clr-accent);
		box-shadow: 0 0 4px var(--clr-accent);
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			scale: 0.75;
		}
	}

	.projectItem:is(:hover, :focus-visible) label::before {
		content: attr(data-name);
		position: absolute;
		display: block;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		max-width: 100%;
		z-index: 1;
		font-weight: bold;
		text-shadow: 0 0 4px #0003;
		animation: fadeIn 200ms ease-out;
	}

	.showcase {
		width: 100%;
		margin: 1rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10%;
		background: var(--grd-lin-primary);
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 4px 4px #0003;
	}

	.showcase a {
		color: var(--clr-text);
		transition: all 200ms ease-out;
	}

	.showcase a:is(:hover, :focus-visible) {
		scale: 1.05;
		translate: 0 -5%;
	}

	.other {
		display: block;
		max-width: 50ch;
		text-align: center;
		margin: auto;
		text-wrap: balance;
	}
</style>
