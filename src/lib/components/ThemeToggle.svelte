<script>
    import Code from "./Code.svelte";
    import Link from "./Link.svelte";
</script>

<article class="container">
	<form class="form">
		{#each ["light", "dark"] as theme}	
		<label class={`label ${theme}`}>
			<input class="radio" type="radio" name="theme" value={theme} />
			<strong class="title">{theme}</strong>
			<code class="prop">--theme: {theme};</code>
		</label>
		{/each}
		<button class="label" type="reset">Reset</button>
	</form>
	<p class="caption">
		Themes use CSS <Code lang="CSS" code="@container" /> style queries. Initial value is <Code lang="CSS" code="none" />.
		<Link target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries">
			Learn More.
		</Link>
	</p>
</article>

<style>
	.container {
		display: block;
		margin-block: var(--large);
	}

	.form {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: var(--2x-small) var(--x-small);
	}

	.caption {
		display: block;
		font-size: var(--small);
		font-family: var(--display-family);
		font-weight: var(--light-weight);
		line-height: var(--short-line);
		color: var(--medium-contrast-color);
		margin-block: var(--2x-small);
	}

	.label {
		all: unset;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--x-small);
		white-space: nowrap;
		font-family: var(--display-family);
		line-height: var(--normal-line);
		background-color: var(--background-color);
		box-shadow: var(--light-box-shadow);
		border-radius: var(--medium-radius);
		border: 2px var(--line) var(--low-contrast-color);
		padding-inline: var(--x-small);
		padding-block: var(--3x-small);
		appearance: none;
		overflow: hidden;
		cursor: pointer;
		transition: scale var(--fast-time) var(--ease-out);
		&:hover, &:focus {
			border-color: var(--medium-contrast-color);
		}
		&:active {
			background-color: var(--middleground-color);
			scale: var(--small-scale);
		}
		&:has(:checked) {
			@container style(--theme: light) {
				background-color: var(--green-100);
				border-color: var(--green-600);
			}
			@container style(--theme: dark) {
				background-color: var(--green-900);
				border-color: var(--green-400);
			}
		}
		&[type="reset"] {
			border-radius: var(--small-radius);
			border-width: 1px;
			font-size: var(--small);
		}
	}

	.radio {
		position: absolute;
		left: -200vw;
		:global {
			:root:has(&[value="light"]:checked) {
				--theme: light;
			}
			:root:has(&[value="dark"]:checked) {
				--theme: dark;
			}
		}
	}

	.title, .prop {
		display: block;
		font-size: var(--small);
	}

	.title {
		text-transform: capitalize;
		font-weight: var(--bold-weight);
		color: var(--high-contrast-color);
	}

	.prop {
		font-family: var(--mono-family);
		line-height: var(--short-line);
		color: var(--medium-contrast-color);
	}
</style>