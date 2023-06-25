<script lang="ts">
	export let srcList: Array<string>;
	export let backgroundColor: String;

	let index = 0;
	let src = srcList[index];

	let leftBtnActive = false,
		rightBtnActive = true;

	// Actions
	const moveLeft = () => {
		index--;
		if (index === 0) {
			leftBtnActive = false;
		}
		rightBtnActive = true;
		src = srcList[index];
	};

	const moveRight = () => {
		index++;
		if (index === srcList.length - 1) {
			rightBtnActive = false;
		}
		leftBtnActive = true;
		src = srcList[index];
	};
</script>

<div class="background" style="background-color: {backgroundColor};">
	<div class="slider">
		<img class="example" {src} alt="Example" />
		<a
			href={src}
			target="_blank"
			rel="noopener noreferrer"
			class="enlarge"
			aria-label="Enlarge image"
		/>
		<button class="leftBtn" disabled={!leftBtnActive} on:click={moveLeft} />
		<button class="rightBtn" disabled={!rightBtnActive} on:click={moveRight} />
	</div>
</div>

<style>
	img {
		width: 100%;
	}

	.example {
		border-radius: 2rem;
		margin: auto;
		box-shadow: 0.125rem 0.125rem 0.25rem var(--clr-black-25);
	}

	.enlarge {
		display: none;
		width: 6rem;
		height: 6rem;

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: 1;

		background-image: url(/Icons/search.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 50%;
		background-color: var(--clr-black-50);

		border-radius: 10px;

		opacity: 0.5;
	}
	.example:hover + .enlarge,
	.enlarge:hover {
		display: block;
	}

	.background {
		margin-bottom: 8%;
	}

	.slider {
		position: relative;

		width: 90%;

		margin: auto;

		translate: 0 15%;

		border-radius: 2rem;
	}

	/* Controls */
	button {
		position: absolute;
		top: 0;

		width: 5%;
		height: 99%;

		border: 1px solid white;

		background-color: var(--clr-black-100);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;

		cursor: pointer;
	}
	button:hover {
		opacity: 0.9;
	}
	button:active {
		opacity: 0.75;
	}
	button:disabled {
		opacity: 0.1;
	}

	.leftBtn {
		left: 0;
		border-radius: 2rem 0 0 2rem;
		background-image: url('/Icons/caret-left.svg');
	}
	.rightBtn {
		right: 0;
		border-radius: 0 2rem 2rem 0;
		background-image: url('/Icons/caret-right.svg');
	}
</style>
