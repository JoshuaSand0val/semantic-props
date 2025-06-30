<script lang="ts">
    import Code from "./Code.svelte";

	let { description, lang, code }: {
		description: string,
		lang: string,
		code: string
	} = $props();
</script>

<article class="container">
	<h4 class="desc">{lang} &mdash; {description}</h4>
	<pre class="dark"><Code lang={lang} code={code} /></pre>
</article>

<style>
	.container {
		display: inline-block;
		inline-size: fit-content;
		max-inline-size: min(100%, var(--large-container));
		vertical-align: top;
		margin-block: 0 var(--medium);
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
		color: var(--low-contrast-color);
		line-height: var(--normal-line);
		margin-block: 0 var(--3x-small);
		margin-inline: var(--smallest-radius);
	}

	pre {
		display: block;
		tab-size: 4;
		white-space: pre;
		font: var(--small)/var(--short-line) var(--mono-family);
		border-radius: var(--smallest-radius);
		border: 1px var(--border-style) var(--foreground-color);
		box-shadow: var(--lightest-box-shadow);
		background-color: var(--background-color);
		color: var(--medium-contrast-color);
		padding-block: var(--small) var(--x-small);
		padding-inline: var(--x-small) var(--x-large);
		margin: 0;
		overflow: auto;
	}
</style>