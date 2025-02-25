<script lang="ts">
	import { onMount } from 'svelte';

	let projects: HTMLElement | null = $state(null);
	let connector: HTMLElement | null = $state(null);
	let currentProject: HTMLElement | null = $state(null);
	let projectList: HTMLElement[] = [];

	onMount(() => {
		projectList = Array.from(document.querySelectorAll<HTMLElement>('.project'));
		currentProject = projectList[0];
		currentProject.classList.add('current');
	});

	const handleScroll = () => {
		if (!projects || !connector || !currentProject) return;
		const pageMiddle = window.innerHeight / 2 + window.scrollY;
		let current: Number;
		if (pageMiddle <= projects.offsetTop) {
			// Above
			current = projects.offsetHeight;
		} else if (pageMiddle >= projects.offsetTop + projects.offsetHeight) {
			// Below
			current = 0;
		} else {
			// In
			current = pageMiddle - projects.offsetTop;
		}
		// Sets connector offset
		connector.style.setProperty('--_middle-offset', current.toString() + 'px');
		// Sets current project
		currentProject.classList.remove('current');
		for (const element of projectList) {
			if (
				pageMiddle >= projects.offsetTop + element.offsetTop &&
				pageMiddle <= projects.offsetTop + element.offsetTop + element.offsetHeight
			) {
				currentProject = element;
				break;
			}
		}
		currentProject.classList.add('current');
	};
</script>

<svelte:window onscroll={handleScroll} />

<section id="projects" aria-labelledby="hProjects">
	<h2 class="custom" id="hProjects">Projects</h2>

	<ul class="projects" bind:this={projects}>
		<div class="connector" bind:this={connector}></div>

		<li class="project">
			<a href="https://connect4.sutac.pl/" target="_blank" rel="noopener noreferrer" class="icon">
				<img src="/images/projects/Connect4.png" alt="Connect4" />
			</a>
			<div class="description">
				<a href="https://connect4.sutac.pl/" target="_blank" rel="noopener noreferrer" class="name"
					>Connect4</a
				>
				<small
					>Connect4 is a project aimed at implementing the classic game of the same name using web
					technologies.</small
				>
			</div>
		</li>
		<li class="project">
			<a href="https://snake.sutac.pl/" target="_blank" rel="noopener noreferrer" class="icon">
				<img src="/images/projects/Snake.svg" alt="Snake" />
			</a>
			<div class="description">
				<a href="https://snake.sutac.pl/" target="_blank" rel="noopener noreferrer" class="name"
					>Snake</a
				>
				<small
					>The project is a classic Snake game running on its own game engine. It is a web
					application with a custom design</small
				>
			</div>
		</li>
		<li class="project">
			<a href="https://gwiazdyzsi.sutac.pl/" target="_blank" rel="noopener noreferrer" class="icon">
				<img src="/images/projects/GwiazdyZSI.svg" alt="GwiazdyZSI" />
			</a>
			<div class="description">
				<a
					href="https://gwiazdyzsi.sutac.pl/"
					target="_blank"
					rel="noopener noreferrer"
					class="name">GwiazdyZSI</a
				>
				<small
					>Gwiazdy ZSI (ZSI Stars) is an original project aimed at storing and categorizing photos
					of teachers from ZSI. The application allows you to browse photos and search for them
					according to the teachers appearing in them.</small
				>
			</div>
		</li>
		<li class="project">
			<a
				href="https://sutac.github.io/Chartex/"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
			>
				<img src="/images/projects/Chartex.svg" alt="Chartex" />
			</a>
			<div class="description">
				<a
					href="https://sutac.github.io/Chartex/"
					target="_blank"
					rel="noopener noreferrer"
					class="name">Chartex</a
				>
				<small>A simple web application project for dynamic chart visualisation.</small>
			</div>
		</li>
		<li class="project">
			<a
				href="https://sutac.github.io/GameOfLife/"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
			>
				<img src="/images/projects/GameOfLife.svg" alt="GameOfLife" />
			</a>
			<div class="description">
				<a
					href="https://sutac.github.io/GameOfLife/"
					target="_blank"
					rel="noopener noreferrer"
					class="name">GameOfLife</a
				>
				<small>A simple implementation of Conway's Game of Life.</small>
			</div>
		</li>
		<li class="project">
			<a href="https://renderer.sutac.pl/" target="_blank" rel="noopener noreferrer" class="icon">
				<img src="/images/projects/Renderer3D.svg" alt="Renderer3D" />
			</a>
			<div class="description">
				<a href="https://renderer.sutac.pl/" target="_blank" rel="noopener noreferrer" class="name"
					>Renderer3D</a
				>
				<small
					>This is a project that explores 3D rendering. It allows you to draw 3D objects loaded
					from .obj files and provides a simple engine for creating interactive experiences.</small
				>
			</div>
		</li>
		<li class="project">
			<a
				href="https://sutac.github.io/TheStubborn/"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
			>
				<img src="/images/projects/TheStubborn.png" alt="TheStubborn" />
			</a>
			<div class="description">
				<a
					href="https://sutac.github.io/TheStubborn/"
					target="_blank"
					rel="noopener noreferrer"
					class="name">TheStubborn</a
				>
				<small>Web game implementation inspired by minigame in Pikuniku</small>
			</div>
		</li>
	</ul>

	<small class="other">
		I have also done many smaller projects which you can check out with my <a
			href="https://www.frontendmentor.io/profile/sutaC"
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

	.projects {
		margin: 3rem auto;
		position: relative;
		padding: 0;
	}

	.connector {
		--_middle: 5%;
		--_middle-offset: 0px; /* Changed by JS */
		width: 0.125rem;
		height: 80%;
		position: absolute;
		left: 50px;
		top: 50%;
		translate: 0 -50%;
		background: linear-gradient(
			var(--clr-secondary) 0px,
			var(--clr-accent) calc(var(--_middle-offset) - var(--_middle) / 2),
			var(--clr-secondary) calc(var(--_middle-offset) + var(--_middle) / 2)
		);
	}

	.project {
		margin: 1.75rem 0;
		list-style: none;
		display: flex;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.project .icon {
		display: flex;
		aspect-ratio: 1;
		flex-shrink: 0;
		align-items: center;
		width: fit-content;
		border-radius: 0.5rem;
		border: 0.125rem solid var(--clr-secondary);
		box-shadow: 0 0 0.33rem var(--clr-secondary);
		background-color: var(--clr-secondary);
		overflow: hidden;
		position: relative;
		transition: all 200ms ease-out;
	}

	.project:global(.current) .icon,
	.project .icon:is(:global(:hover, :focus-visible)) {
		border-color: var(--clr-accent);
		box-shadow: 0 0 0.33rem var(--clr-accent);
	}

	.project img {
		width: 100px;
		transition: filter 200ms ease-out;
	}

	.project .icon:is(:global(:hover, :focus-visible)) img {
		filter: blur(4px) brightness(75%);
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			scale: 0.75;
		}
	}

	.project .icon:is(:global(:hover, :focus-visible))::before {
		content: 'Open!';
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
		color: var(--clr-text);
	}

	.project .description {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		background: var(--grd-lin-primary);
		padding: 2rem;
		border-radius: 0.5rem;
		flex-grow: 1;
	}

	.project .description small {
		text-wrap: balance;
		width: 100%;
	}

	.project .name {
		color: var(--clr-text);
		transition: all 200ms ease-out;
	}

	.project .name:is(:global(:hover, :focus-visible)) {
		scale: 1.05;
		translate: 0 -5%;
		text-shadow: 0 0.25em 0.125em #0004;
	}

	.other {
		display: block;
		max-width: 50ch;
		text-align: center;
		margin: auto;
		text-wrap: balance;
	}

	@media (width >= 700px) {
		.project .description {
			flex-direction: row;
		}
	}
</style>
