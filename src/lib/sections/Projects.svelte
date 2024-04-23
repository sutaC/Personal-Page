<section id="projects" aria-labelledby="hProjects">
	<h2 class="custom" id="hProjects">Projects</h2>

	<div class="display">
		<div class="projectItem">
			<input type="radio" name="project" id="prjConnect4" checked />
			<label for="prjConnect4" data-name="Connect4">
				<img src="/images/projects/Connect4.png" alt="Connect4" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjSnake" />
			<label for="prjSnake" data-name="Snake">
				<img src="/images/projects/Snake.png" alt="Snake" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjGwiazdyZSI" />
			<label for="prjGwiazdyZSI" data-name="GwiazdyZSI">
				<img src="/images/projects/GwiazdyZSI.png" alt="GwiazdyZSI" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjChartex" />
			<label for="prjChartex" data-name="Chartex">
				<img src="/images/projects/Chartex.png" alt="Chartex" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjGameOfLife" />
			<label for="prjGameOfLife" data-name="GameOfLife">
				<img src="/images/projects/GameOfLife.png" alt="GameOfLife" />
			</label>
		</div>
		<div class="projectItem">
			<input type="radio" name="project" id="prjTheAIQuill" />
			<label for="prjTheAIQuill" data-name="TheAIQuill">
				<img src="/images/projects/TheAIQuill.png" alt="TheAIQuill" />
			</label>
		</div>
	</div>

	<div class="showcase">
		<a href="http://{'link'}" target="_blank" rel="noopener noreferrer">Connect4</a>
		<small class="description">
			This is a project developing a classic game in web standards enabling online and offline
			multiplayer gameplay thanks to the use of PWA technology.
		</small>
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
	}

	.other {
		display: block;
		max-width: 50ch;
		text-align: center;
		margin: auto;
	}
</style>
