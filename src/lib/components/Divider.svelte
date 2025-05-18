<script lang="ts">
	let { title }: {
		title: string
	} = $props();
</script>

<div class="container">{title}</div>

<style>
	.container {
		display: block;
		font-size: var(--x-large);
		font-family: var(--display-family);
		line-height: var(--shorter-line);
		border-block-end: 1px var(--border-style) var(--fifth-body-color);
		color: var(--secondary-text-color);
		padding-block-end: var(--3x-small);
		padding-inline-start: 1px;
		margin-block: var(--x-large) var(--large);
	}
</style>