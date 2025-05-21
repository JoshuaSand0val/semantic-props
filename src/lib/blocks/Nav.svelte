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
				<a href="#builtusing">Built using Semantic Props</a>
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
		color: var(--secondary-text-color);
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
		border: 1px var(--border-style) var(--tertiary-body-color);
		border-radius: var(--largest-radius);
		background-color: var(--primary-body-color);
		padding: var(--x-small);
		line-height: 1;
		box-shadow: var(--lightest-box-shadow);
		transition: background-color var(--fast-time) var(--ease-in-out);
		cursor: pointer;
		&:focus, &:has(+ .navigation:focus-within) {
			box-shadow: var(--lightest-inset-shadow), var(--lightest-box-shadow);
		}
	}

	.navigation {
		position: absolute;
		z-index: var(--z-top);
		top: calc(100% + var(--x-small));
		inline-size: min(100%, var(--smaller-container));
		max-block-size: min(60vb, var(--medium-container));
		border-radius: var(--small-radius);
		border: 1px var(--border-style) var(--tertiary-body-color);
		background-color: var(--primary-body-color);
		box-shadow: var(--lighter-box-shadow);
		overflow: auto;
		transition: all var(--fast-time) var(--ease-out);
		transition-property: opacity, transform;
		.button:not(:focus) ~ &:not(:focus-within) {
			transform: translateY(calc(var(--3x-small) * -1));
			pointer-events: none;
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
			opacity: 1;
		}
	}

	a[href] {
		display: block;
		border-block-end: 1px var(--border-style) var(--secondary-body-color);
		text-decoration: none;
		color: inherit;
		padding-inline: var(--medium);
		padding-block: var(--small);
		outline-offset: -4px;
		&:last-child {
			border-block-end: none;
		}
		&:not(:hover) {
			transition: background-color var(--fast-time) var(--ease-in-out);
		}
		&:hover, &:focus {
			background-color: var(--secondary-body-color);
		}
		&:active {
			text-shadow: var(--text-stroke-shadow);
			color: var(--primary-accent-color);
		}
	}
</style>