<script lang="ts">
	let { title, description, image, imageDark, url }: {
		title: string,
		description: string,
		image: string,
		imageDark?: string,
		url: string
	} = $props();
</script>

<article class="container">
	<header class="header">
		<h4 class="title">{title}</h4>:
		<p class="description">{description}</p>
	</header>
	<div class="image">
		<a href={url} target="_blank">
			<img class={imageDark && "light"} src={image} alt={`${title} (Light Theme)`} />
			{#if imageDark}
			<img class="dark" src={imageDark} alt={`${title} (Dark Theme)`} />
			{/if}
		</a>
	</div>
</article>

<style>
	.container {
		display: flex;
		flex-flow: column nowrap;
		max-inline-size: var(--large-container);
		.header {
			display: block;
			font-family: var(--body-family);
			line-height: var(--shorter-line);
			margin-inline: 2px;
			margin-block: var(--small) 0;
			.title, .description {
				display: inline;
			}
			.title {
				font-weight: var(--bold-weight);
			}
		}
		.image {
			display: block;
			border-radius: var(--medium-radius);
			border: 1px var(--border-style) var(--third-body-color);
			background-color: var(--secondary-black);
			box-shadow: var(--heaviest-inset-shadow), var(--light-box-shadow);
			overflow: hidden;
			order: -1;
			transition: all var(--faster-time) var(--ease-out);
			&:hover, &:focus {
				animation: pulse var(--slowest-time) var(--ease-in-out) infinite alternate;
			}
			&:active {
				animation: none;
				filter: var(--low-contrast);
				transform: none;
			}
			img {
				inline-size: 100%;
			}
			img.light {
				display: var(--light, block) var(--dark, none);
			}
			img.dark {
				display: var(--light, none) var(--dark, block);
			}
		}
	}

	@keyframes pulse {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.01);
		}
	}
</style>