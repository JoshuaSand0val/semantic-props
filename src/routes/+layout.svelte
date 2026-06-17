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
		scroll-behavior: smooth;
	}

	:global(body) {
		display: block;
		background-color: var(--background-color);
		color: var(--high-contrast-color);
		color-scheme: light dark;
		overflow-x: hidden;
		overflow-y: auto;
		@container style(--theme: light) {
			color-scheme: light;
		}
		@container style(--theme: dark) {
			color-scheme: dark;
		}
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

	.content {
		display: block;
		flex: 1 0 auto;
		&::before, &::after {
			content: "";
			position: fixed;
			z-index: var(--z-bottom);
			inset: 0;
			background: conic-gradient(from 90deg at 1px 1px, #0000 90deg, var(--middleground-color) 0);
			animation-duration: var(--slow-time);
			animation-timing-function: linear;
			animation-fill-mode: both;
			opacity: var(--low-opacity);
		}
		&::before {
			margin-inline: auto;
			background-size: 100% var(--2x-large);
			animation-name: blueprint-horizontal;
			animation-delay: var(--slow-time);
			@media (prefers-reduced-motion) {
				animation: none;
			}
		}
		&::after {
			background-size: var(--2x-large) 100%;
			animation-name: blueprint-vertical;
			@media (prefers-reduced-motion) {
				animation: none;
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