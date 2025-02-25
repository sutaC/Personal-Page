<script lang="ts">
	let follower: HTMLElement | null = $state(null);
	let hidden = $state(true);
	let down = $state(false);
	let touch = $state(false);

	function once(fn: Function | null) {
		return (event: Event) => {
			if (fn) fn.call(event);
			fn = null;
		};
	}

	const handleTouch = () => {
		touch = true;
		hidden = true;
	};

	const handleMouseLeave = () => {
		hidden = true;
	};

	const handleMouseDown = () => {
		down = true;
	};

	const handleMouseUp = () => {
		down = false;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (touch) return;
		hidden = false;
		setTimeout(() => {
			if (!follower) return;
			follower.style.left = (event.clientX - follower.offsetWidth / 2).toString() + 'px';
			follower.style.top = (event.clientY - follower.offsetHeight / 2).toString() + 'px';
		}, 75);
	};
</script>

<svelte:window ontouchstart={once(handleTouch)} />

<svelte:body
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
/>

<div class="follower" class:hidden class:down bind:this={follower}></div>

<style>
	.follower {
		width: 20vw;
		max-width: 10rem;
		aspect-ratio: 1;
		position: fixed;
		background: var(--grd-rad-fade);
		z-index: -1000;
		filter: blur(1rem);
		opacity: 0.6;
		transition:
			opacity 100ms ease-in,
			transform 100ms ease-in-out;
		animation: follower 4s linear 0s infinite;
	}

	.follower.hidden {
		opacity: 0;
	}

	.follower.down {
		opacity: 0.8;
		transform: scale(1.1);
	}

	@keyframes follower {
		0% {
			filter: hue-rotate(0deg) blur(1rem);
			scale: 0.8;
			border-radius: 50% 20% / 10% 40%;
		}
		50% {
			filter: hue-rotate(15deg) blur(1rem);
			scale: 1;
			border-radius: 20% 50% / 40% 10%;
		}
		100% {
			filter: hue-rotate(0deg) blur(1rem);
			rotate: 359deg;
			scale: 0.8;
			border-radius: 50% 20% / 10% 40%;
		}
	}
</style>
