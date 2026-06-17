<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const easing: Record<string, string> = {
		"Ease": "var(--ease)",
		"Ease-In": "var(--ease-in)",
		"Ease-Out": "var(--ease-out)",
		"Ease-In-Out": "var(--ease-in-out)"
	};

	const timing: Record<string, string> = {
		"Fast Time": "var(--fast-time)",
		"Normal Time": "var(--normal-time)",
		"Slow Time": "var(--slow-time)"
	};
</script>

<Divider title="Animation Timing and Easing" id="timing">
	<p>Semantic Props provides CSS <Code lang="css" code="animation" /> values for timing and easing.</p>
	{#each Object.entries({ "easing": easing, "timing": timing }) as [type, props]}		
	<div class="container">
		{#each Object.entries(props) as [title, prop]}
		<div class={`demo ${type}`} style:--prop={prop} tabindex="-1">
			<strong class="title">{title}</strong>
			<small class="prop">{prop}</small>
		</div>
		{/each}
	</div>
	{/each}
</Divider>

<style>
	.container {
		--columns-size: var(--2x-small-container);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--columns-size)), 1fr));
		scroll-snap-type: inline mandatory;
		overflow: auto;
		gap: var(--small);
		filter: var(--light-shadow);
		margin-inline: auto;
		margin-block: var(--3x-large);
		@media (--medium-viewport) {
			--columns-size: var(--x-small-container);
		}
	}

	.demo {
		position: relative;
		display: block;
		background-color: var(--background-color);
		padding: var(--small);
		scroll-snap-align: center;
		border: 1px var(--line) var(--foreground-color);
		border-radius: var(--small-radius);
		overflow: hidden;
		cursor: pointer;
		flex: 1 0 auto;
		&::after {
			position: absolute;
			inset: auto 0 0;
			content: "";
			display: block;
			inline-size: 100%;
			block-size: var(--3x-small);
			background-color: var(--high-contrast-color);
			transform-origin: bottom left;
			opacity: 0;
			animation-name: demo;
			animation-iteration-count: infinite;
			animation-duration: 3s;
			animation-timing-function: var(--ease-in-out);
		}
		&.easing::after {
			animation-timing-function: var(--prop);
		}
		&.timing::after {
			animation-delay: var(--prop);
		}
	}

	@keyframes demo {
		0% {
			transform: scaleX(1);
			opacity: 0;
		}
		16%, 100% {
			opacity: 1;
		}
		100% {
			transform: scaleX(0);
		}
	}

	.title {
		display: block;
		line-height: var(--short-line);
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		color: var(--medium-contrast-color);
		font-size: var(--medium);
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-weight: var(--regular-weight);
		color: var(--low-contrast-color);
		font-size: var(--small);
	}
</style>