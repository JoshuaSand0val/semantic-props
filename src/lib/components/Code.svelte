<script lang="ts">
	import hljs from "highlight.js";

	let { lang, code }: {
		lang: string,
		code: string
	} = $props();
</script>

<code>{@html hljs.highlight(code.trim(), { language: lang }).value}</code>

<style>
	code {
		font-family: var(--mono-family);
	}

	code :global {
		/*
			Atom One Light+Dark by Daniel Gamage
			Original One Light Syntax theme from https://github.com/atom/one-light-syntax
			Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
		*/

		.hljs {
			color: var(--light, #383a42) var(--dark, #abb2bf);
		}

		.hljs-comment,
		.hljs-quote {
			color: var(--light, #a0a1a7) var(--dark, #5c6370);
			font-style: italic;
		}

		.hljs-doctag,
		.hljs-keyword,
		.hljs-formula {
			color: var(--light, #a626a4) var(--dark, #c678dd);
		}

		.hljs-section,
		.hljs-name,
		.hljs-selector-tag,
		.hljs-deletion,
		.hljs-subst {
			color: var(--light, #e45649) var(--dark, #e06c75);
		}

		.hljs-literal {
			color: var(--light, #0184bb) var(--dark, #56b6c2);
		}

		.hljs-string,
		.hljs-regexp,
		.hljs-addition,
		.hljs-attribute,
		.hljs-meta-string {
			color: var(--light, #50a14f) var(--dark, #98c379);
		}

		.hljs-built_in,
		.hljs-class .hljs-title {
			color: var(--light, #c18401) var(--dark, #e6c07b);
		}

		.hljs-attr,
		.hljs-variable,
		.hljs-template-variable,
		.hljs-type,
		.hljs-selector-class,
		.hljs-selector-attr,
		.hljs-selector-pseudo,
		.hljs-number {
			color: var(--light, #986801) var(--dark, #d19a66);
		}

		.hljs-symbol,
		.hljs-bullet,
		.hljs-link,
		.hljs-meta,
		.hljs-selector-id,
		.hljs-title {
			color: var(--light, #4078f2) var(--dark, #61aeee);
		}

		.hljs-emphasis {
			font-style: italic;
		}

		.hljs-strong {
			font-weight: var(--bold-weight);
		}

		.hljs-link {
			text-decoration: underline;
		}
	}
</style>