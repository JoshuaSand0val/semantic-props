<script lang="ts">
	import { onMount } from "svelte";

	import semantic from "semantic-props?inline";
	import * as prettier from "prettier";
	import * as prettierPostCSSParser from "prettier/parser-postcss";

	let { props }: {
		props: string[],
	} = $props();

	let declarations: string[][] = $state([]);

	onMount(async () => {
		const styles = await prettier.format(semantic, {
			parser: "css",
			plugins: [prettierPostCSSParser]
		});

		declarations = props.map(prop => {
			const regex = new RegExp(`${prop}:([^;}]+)`);
			const value = styles.match(regex);
			if (value !== null) {
				return [prop, value[1]];
			}
			return [prop, "[no value]"];
		});
	});
</script>

<details>
	<summary>Reference Table</summary>
	<div class="container scroll">
		<table>
			<thead>
				<tr>
					<th scope="col">Semantic Props</th>
					<th scope="col">Value</th>
				</tr>
			</thead>
			<tbody>
				{#each declarations as [prop, value]}
				<tr>
					<td class="prop">
						<code>{prop}:</code>
					</td>
					<td class="value">
						<code class="scroll">{value};</code>
					</td>
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
</details>

<style>
	@import "../styles/scroll.css";

	summary {
		display: inline-flex;
		flex-flow: row wrap;
		gap: 0 1ch;
		font-size: var(--medium);
		font-family: var(--display-family);
		line-height: var(--shorter-line);
		color: var(--medium-contrast-color);
		list-style: none;
		&::marker,
		&::-webkit-details-marker {
			display: none;
		}
		&::after {
			content: "‹";
		}
		details[open] &::after {
			transform: rotate(-90deg);
		}
	}

	.container {
		padding-inline: calc((100vi - 100%) * 0.5);
		margin-inline: calc((100vi - 100%) * -0.5);
	}

	table {
		display: table;
		min-inline-size: 100%;
	}

	tr {
		vertical-align: baseline;
		text-align: left;
		border-block-end: 1px var(--border-style) var(--tertiary-color);
		thead & {
			border-block-end-color:
			var(--light, var(--neutral-350))
			var(--dark, var(--neutral-650));
		}
	}

	th, td {
		padding-block: var(--2x-small);
		padding-inline-end: var(--large);
	}

	th {
		white-space: nowrap;
		font-size: var(--medium);
		font-family: var(--display-family);
		font-weight: var(--regular-weight);
		color: var(--high-contrast-color);
		padding-block: var(--small) var(--2x-small);
	}

	td {
		font-size: var(--small);
	}

	code {
		font-family: var(--mono-family);
	}

	.prop {
		min-inline-size: 20ch;
		color: var(--light, var(--accent-600)) var(--dark, var(--accent-300));
	}

	.value {
		min-inline-size: 45ch;
		color: var(--low-contrast-color);
	}
</style>