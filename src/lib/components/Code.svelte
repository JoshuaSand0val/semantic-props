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
			color: #383a42;
			:global(.dark) & {
				color: #abb2bf;
			}
		}

		.hljs-comment,
		.hljs-quote {
			color: #a0a1a7;
			font-style: italic;
			:global(.dark) & {
				color: #5c6370;
			}
		}

		.hljs-doctag,
		.hljs-keyword,
		.hljs-formula {
			color: #a626a4;
			:global(.dark) & {
				color: #c678dd;
			}
		}

		.hljs-section,
		.hljs-name,
		.hljs-selector-tag,
		.hljs-deletion,
		.hljs-subst {
			color: #e45649;
			:global(.dark) & {
				color: #e06c75;
			}
		}

		.hljs-literal {
			color: #0184bb;
			:global(.dark) & {
				color: #56b6c2;
			}
		}

		.hljs-string,
		.hljs-regexp,
		.hljs-addition,
		.hljs-attribute,
		.hljs-meta-string {
			color: #50a14f;
			:global(.dark) & {
				color: #98c379;
			}
		}

		.hljs-built_in,
		.hljs-class .hljs-title {
			color: #c18401;
			:global(.dark) & {
				color: #e6c07b;
			}
		}

		.hljs-attr,
		.hljs-variable,
		.hljs-template-variable,
		.hljs-type,
		.hljs-selector-class,
		.hljs-selector-attr,
		.hljs-selector-pseudo,
		.hljs-number {
			color: #986801;
			:global(.dark) & {
				color: #d19a66;
			}
		}

		.hljs-symbol,
		.hljs-bullet,
		.hljs-link,
		.hljs-meta,
		.hljs-selector-id,
		.hljs-title {
			color: #4078f2;
			:global(.dark) & {
				color: #61aeee;
			}
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