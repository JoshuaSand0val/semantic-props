<script>
	import "../app.css";

    import Content from "$lib/components/Content.svelte";
    import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<div class="container">
	<main class="content">
		<Content>
			{@render children()}
		</Content>
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		position: relative;
		display: block;
		scroll-behavior: smooth;
		background-color: var(--background-color);
		color: var(--high-contrast-color);
		overflow-x: hidden;
		overflow-y: auto;
	}

	:global(:root, body),
	.container {
		min-block-size: 100vh;
		min-block-size: 100dvb;
	}

	.container {
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		align-items: stretch;
	}

	.container::after {
		content: "";
		position: absolute;
		z-index: var(--z-bottom);
		inset: 0;
		display: block;
		inline-size: 100%;
		block-size: var(--large-container);
		background-image: linear-gradient(to right,
			var(--red-300),
			var(--orange-300),
			var(--yellow-300),
			var(--green-300),
			var(--blue-300),
			var(--indigo-300),
			var(--violet-300)
		);
		background-size: 100% 100%;
		mask-mode: alpha;
		mask-image: radial-gradient(black, transparent 75%);
		mask-size: 100% 100%;
		transform: rotate(3deg) translateY(-50%);
		transform-origin: top left;
		opacity: var(--low-opacity);
		filter: var(--heaviest-blur);
		@media (--dark) {
			background-image: linear-gradient(to right,
				var(--red-700),
				var(--orange-700),
				var(--yellow-700),
				var(--green-700),
				var(--blue-700),
				var(--indigo-700),
				var(--violet-700)
			);
		}
		@media not (prefers-reduced-motion) {
			animation-name: fade-in-gradient;
			animation-duration: var(--slow-time);
			animation-timing-function: var(--ease-out);
			animation-delay: var(--slowest-time);
			animation-fill-mode: both;
		}
	}

	@keyframes fade-in-gradient {
		from {
			inline-size: 75%;
			block-size: 0;
		}
	}

	.content {
		display: block;
		flex: 1 0 auto;
		&::before, &::after {
			content: "";
			position: fixed;
			z-index: var(--z-bottom);
			inset: 0;
			background: conic-gradient(from 90deg at 1px 1px, #0000 90deg, var(--middleground-color) 0);
			animation-duration: var(--slowest-time);
			animation-timing-function: linear;
			animation-fill-mode: both;
		}
		&::before {
			margin-inline: auto;
			background-size: 100% var(--2x-large);
			@media not (prefers-reduced-motion) {
				animation-name: blueprint-horizontal;
				animation-delay: var(--faster-time);
			}
		}
		&::after {
			background-size: var(--2x-large) 100%;
			@media not (prefers-reduced-motion) {
				animation-name: blueprint-vertical;
				animation-delay: var(--fast-time);
			}
		}
	}

	@keyframes blueprint-horizontal {
		from {
			inline-size: 0vw;
		}
		to {
			inline-size: 100vw;
		}
	}

	@keyframes blueprint-vertical {
		from {
			block-size: 0vh;
		}
		to {
			block-size: 100vh;
		}
	}
</style>