<script>
    import Code from "./Code.svelte";
</script>

<article class="container">
	<p class="caption">
		Viewport style query values are boolean <Code lang="CSS" code="true" /> or <Code lang="CSS" code="false" />.
		Initial value is <Code lang="CSS" code="false" />.
	</p>
	<div class="wrapper">
		<form class="form">
			{#each ["small", "medium", "large"] as size}	
			<label class={`label ${size}`}>
				<input class="radio" type="radio" name="theme" value={size} />
				<strong class="title">{size} Viewport</strong>
				<code class="prop">--{size}-viewport: <span class="boolean"></span>;</code>
			</label>
			{/each}
			<button class="label" type="reset">Reset</button>
		</form>
		<article class="mockup">
			<div class="titlebar">Example Layout</div>
			<div class="grid">
				<span class="item"></span>
				<span class="item"></span>
				<span class="item"></span>
			</div>
			<div class="footer">
				<span>Home</span>
				<span>About Us</span>
				<span>Contact Us</span>
				<span>Our Blog</span>
			</div>
		</article>	
	</div>
</article>

<style>
	.container {
		display: block;
		margin-block: var(--large);
	}

	.wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: start;
		gap: var(--large);
	}

	.form {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: var(--2x-small) var(--x-small);
		flex: 9999 1 0;
	}

	.caption {
		display: block;
		font-size: var(--small);
		font-family: var(--display-family);
		font-weight: var(--light-weight);
		line-height: var(--short-line);
		color: var(--medium-contrast-color);
		margin-block: var(--x-small);
	}

	.label {
		all: unset;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		inline-size: min(var(--x-small-container), 100%);
		align-items: center;
		font-family: var(--display-family);
		line-height: var(--normal-line);
		background-color: var(--background-color);
		box-shadow: var(--light-box-shadow);
		border-radius: var(--small-radius);
		border: 1px var(--line) var(--low-contrast-color);
		padding-inline: var(--small);
		padding-block: var(--2x-small);
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
			inline-size: auto;
			border-radius: var(--large-radius);
			font-size: var(--small);
			padding-inline: var(--x-small);
			padding-block: var(--3x-small);
		}
	}

	.radio {
		position: absolute;
		left: -200vw;
		.container:has(&[value="small"]:checked) {
			--small-viewport: true;
			--medium-viewport: false;
			--large-viewport: false;
		}
		.container:has(&[value="medium"]:checked) {
			--small-viewport: true;
			--medium-viewport: true;
			--large-viewport: false;
		}
		.container:has(&[value="large"]:checked) {
			--small-viewport: true;
			--medium-viewport: true;
			--large-viewport: true;
		}
	}

	.title, .prop {
		display: block;
	}

	.title {
		text-transform: capitalize;
		font-size: var(--medium);
		line-height: var(--normal-line);
		font-weight: var(--bold-weight);
		color: var(--high-contrast-color);
	}

	.prop {
		font-size: var(--small);
		font-family: var(--mono-family);
		line-height: var(--short-line);
		color: var(--medium-contrast-color);
	}

	.boolean {
		&::before {
			content: "false";
		}
		@container style(--small-viewport) {
			.label.small &::before {
				content: "true";
			}
		}
		@container style(--medium-viewport) {
			.label.medium &::before {
				content: "true";
			}
		}
		@container style(--large-viewport) {
			.label.large &::before {
				content: "true";
			}
		}
	}

	.mockup {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		align-items: stretch;
		font-size: var(--medium);
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		background-color: var(--background-color);
		border-radius: var(--small-radius);
		outline: 1px solid var(--low-contrast-color);
		box-shadow: var(--light-box-shadow);
		inline-size: min(var(--medium-container), 100%);
		block-size: var(--small-container);
		overflow: hidden;
		flex: 0 0 auto;
		transform: scale(0.8);
		@container style(--medium-viewport) {
			font-size: var(--small);
		}
		@container style(--large-viewport) {
			font-size: var(--x-small);
		}
		.titlebar, .grid, .footer {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			align-items: center;
			white-space: nowrap;
			gap: var(--x-small) var(--small);
			line-height: var(--normal-line);
			outline: inherit;
			padding: var(--x-small);
			overflow: auto;
			flex: 0 0 auto;
			@container style(--medium-viewport) {
				line-height: var(--short-line);
			}
		}
		.footer {
			@container style(--large-viewport) {
				align-self: center;
				border-radius: var(--large-radius);
				padding-inline: var(--x-large);
				padding-block: var(--2x-small);
				margin: var(--small);
			}
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(3, 1fr);
			justify-content: start;
			align-items: stretch;
			outline: none;
			flex: 1 1 auto;
			@container style(--small-viewport) {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
			}
			@container style(--medium-viewport) {
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: repeat(2, 1fr);
			}
			@container style(--large-viewport) {
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(3, 1fr);
			}
		}
		.item {
			border: 1px solid var(--low-contrast-color);
		}
	}
</style>