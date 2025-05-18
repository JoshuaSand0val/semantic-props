<script lang="ts">
	import hljs from 'highlight.js';

	let { description, lang, code }: {
		description: string,
		lang: string,
		code: string
	} = $props();
</script>

<article class="container">
	<h4 class="desc">{lang} &mdash; {description}</h4>
	<pre>
		<code>{@html hljs.highlight(code, { language: lang }).value}</code>
	</pre>
</article>

<style>
	:global {
		@import 'highlight.js/styles/atom-one-dark.css';
	}

	.container {
		display: inline-block;
		inline-size: fit-content;
		max-inline-size: min(100%, var(--medium-container));
		margin-block: var(--large) var(--medium);
		margin-inline-end: var(--small);
		:global(& + &) {
			margin-block-start: 0;
		}
	}

	.desc {
		display: block;
		font-weight: var(--thin-weight);
		font-family: var(--display-family);
		font-size: var(--x-small);
		text-transform: uppercase;
		color: var(--fifth-text-color);
		line-height: var(--tall-line);
		margin-block: 0;
		margin-inline: var(--smallest-radius);
	}

	pre {
		display: block;
		tab-size: 4;
		hyphens: none;
		font-size: var(--small);
		font-family: var(--mono-family);
		border-radius: var(--smallest-radius);
		border: 1px var(--border-style) var(--third-body-color);
		border-block-end-width: 3px;
		background-clip: border-box;
		background-color: var(--secondary-body-color);
		color: var(--primary-gray);
		text-shadow: var(--light, var(--text-stroke-shadow));
		padding-block-start: var(--small);
		padding-block-end: var(--x-small);
		padding-inline-start: var(--x-small);
		padding-inline-end: var(--x-large);
		overflow: auto;
		margin: 0;
		white-space: normal;
		cursor: text;
	}

	code {
		white-space: pre;
	}
</style>