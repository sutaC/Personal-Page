<script lang="ts">
	export let type: 'Primary' | 'Secondary' = 'Primary';
</script>

<button class:primary={type === 'Primary'} class:secondary={type === 'Secondary'} on:click>
	<slot />
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		margin: 2.5rem auto;
		padding: 1em 2em;

		font-size: 1rem;
		font-weight: bold;

		color: var(--clr-black-100);

		box-shadow: 0.125rem 0.125rem 0.25rem var(--clr-black-25);
		border: none;
		border-radius: 100px;

		cursor: pointer;
	}

	/* Primary */

	.primary {
		background: linear-gradient(
			to right,
			var(--clr-primary),
			color-mix(in srgb, var(--clr-secondary) 60%, transparent)
		);
	}
	.primary:hover {
		opacity: 0.85;
	}
	.primary:active {
		box-shadow: inset 0.125rem 0.125rem 0.25rem var(--clr-black-25);
	}
	.primary:disabled {
		color: hsla(0, 0%, 100%, 0.5);
		background: linear-gradient(to right, var(--clr-black-75), var(--clr-black-25));
	}

	/* Secondary */

	.secondary {
		background-color: var(--clr-black-5);
		border: 1px solid var(--clr-black-100);
	}
	.secondary:hover {
		background-color: var(--clr-black-10);
	}
	.secondary:active {
		color: var(--clr-primary);
		border-color: var(--clr-primary);
	}
	.secondary:disabled {
		color: hsl(256, 8%, 47%);
		border-color: hsl(256, 8%, 47%);
	}
</style>
