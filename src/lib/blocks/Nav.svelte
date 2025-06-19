<script>
    import Body from "$lib/components/Body.svelte";
</script>

<div class="container">
	<Body>
		<aside class="wrapper">
			<span tabindex="0" role="button" class="button" aria-label="Main Navigation Menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
				</svg>
			</span>
			<nav class="navigation">
				<a href="#top">Semantic Props</a>
				<a href="#builtusing">Built using Semantic Props</a>
				<a href="#colors">Color Palette</a>
				<a href="#filters">Filter Effects</a>
				<a href="#fonts">Font Sizes and Styles</a>
				<a href="#aspectratios">Aspect Ratios</a>
				<a href="#safeareas">Display Safe-Areas</a>
				<a href="#sizes">Containers and Spacing Sizes</a>
			</nav>
			<div class="backdrop"></div>
		</aside>
	</Body>
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
		border: 1px var(--border-style) var(--foreground-color);
		border-radius: var(--largest-radius);
		background-color: var(--background-color);
		padding: var(--x-small);
		line-height: 0;
		box-shadow: var(--lightest-box-shadow);
		transition: all var(--fast-time) var(--ease-in-out);
		cursor: pointer;
		&:focus, &:has(+ .navigation:focus-within) {
			border-color: var(--gray-300);
			background-color: var(--middleground-color);
			box-shadow: var(--lightest-inset-shadow), var(--lightest-box-shadow);
			@media (--dark) {
				border-color: var(--gray-700);
			}
		}
	}

	.navigation {
		position: absolute;
		z-index: var(--z-top);
		top: calc(100% + var(--x-small));
		inline-size: min(100%, var(--smaller-container));
		max-block-size: min(60vb, var(--medium-container));
		border-radius: var(--smaller-radius);
		border: 1px var(--border-style) var(--foreground-color);
		background-color: var(--background-color);
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
		backdrop-filter: var(--lighter-blur) var(--low-brightness);
		pointer-events: none;
		opacity: 0;
		.button:focus ~ &, .navigation:focus-within + & {
			pointer-events: auto;
			opacity: 1;
		}
	}

	a[href] {
		display: block;
		border-block-end: 1px var(--border-style) var(--middleground-color);
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
			background-color: var(--middleground-color);
		}
		&:active {
			background-color: var(--accent-150);
			color: var(--accent-400);
			@media (--dark) {
				background-color: var(--accent-850);
			}
		}
	}
</style>