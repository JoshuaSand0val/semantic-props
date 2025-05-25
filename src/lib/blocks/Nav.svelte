<script>
    import Content from "$lib/components/Content.svelte";
</script>

<div class="container">
	<Content>
		<aside class="wrapper">
			<span tabindex="0" role="button" class="button" aria-label="Main Navigation Menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
				</svg>
			</span>
			<nav class="navigation">
				<a href="#top">Semantic Props</a>
				<a href="#builtusing">Built using Semantic Props</a>
				<a href="#colors">Color Palette and Booleans</a>
			</nav>
			<div class="backdrop"></div>
		</aside>
	</Content>
</div>

<style>
	.container {
		position: fixed;
		z-index: var(--z-fixed);
		inset: 0 0 auto;
		color: var(--medium-contrast-color);
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		justify-content: end;
	}

	.button {
		position: relative;
		z-index: var(--z-top);
		display: block;
		font-size: var(--x-large);
		border: 1px var(--border-style) var(--tertiary-color);
		border-radius: var(--largest-radius);
		background-color: var(--primary-color);
		padding: var(--x-small);
		line-height: 0;
		box-shadow: var(--lightest-box-shadow);
		transition: background-color var(--fast-time) var(--ease-in-out);
		cursor: pointer;
		&:focus, &:has(+ .navigation:focus-within) {
			background-color: var(--secondary-color);
			box-shadow: var(--lightest-inset-shadow), var(--lightest-box-shadow);
		}
	}

	.navigation {
		position: absolute;
		z-index: var(--z-top);
		top: calc(100% + var(--x-small));
		inline-size: min(100%, var(--smaller-container));
		max-block-size: min(60vb, var(--medium-container));
		border-radius: var(--smaller-radius);
		border: 1px var(--border-style) var(--tertiary-color);
		background-color: var(--primary-color);
		box-shadow: var(--lighter-box-shadow);
		font-family: var(--display-family);
		overflow: auto;
		transition: all var(--fast-time) var(--ease-out);
		transition-property: opacity, transform, visibility;
		.button:not(:focus) + &:not(:focus-within) {
			transform: translateY(calc(var(--3x-small) * -1));
			visibility: hidden;
			opacity: 0;
		}
	}

	.backdrop {
		position: fixed;
		z-index: var(--z-bottom);
		inset: 0;
		transition: opacity var(--normal-time) var(--ease-out);
		backdrop-filter: var(--lightest-blur);
		pointer-events: none;
		opacity: 0;
		.button:focus ~ &, .navigation:focus-within + & {
			pointer-events: auto;
			opacity: 1;
		}
	}

	a[href] {
		display: block;
		border-block-end: 1px var(--border-style) var(--secondary-color);
		font-size: var(--small);
		text-decoration: none;
		color: inherit;
		padding-inline: var(--medium);
		padding-block: var(--x-small);
		outline-offset: -4px;
		@media (pointer: fine) {
			padding-inline: var(--small);
			padding-block: var(--2x-small);
		}
		&:last-child {
			border-block-end: none;
		}
		&:not(:hover) {
			transition: background-color var(--fast-time) var(--ease-in-out);
		}
		&:hover, &:focus {
			background-color: var(--secondary-color);
		}
		&:active {
			background-color:
			var(--light, var(--accent-150))
			var(--dark, var(--accent-850));
			color: var(--accent-400);
		}
	}
</style>