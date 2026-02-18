<script lang="ts">
    import Content from "$lib/components/Content.svelte";
	import Link from "$lib/components/Link.svelte";
</script>

<footer class="container">
	<Content>
		<div class="wrapper">
			<span class="copyright">
				&copy; {new Date().getFullYear()}
				<Link to="https://heyjes.dev/">Joshua Elijah Sandoval.</Link>
			</span>
			<span>
				<ul class="about">
					<li><Link to="https://github.com/JoshuaSand0val/semantic-props/">Github</Link></li>
					<li class="version">v2.0.0-beta.2 (MIT)</li>
				</ul>
				<Link to="#top">Scroll to Top ↑</Link>
			</span>
		</div>
	</Content>
</footer>

<style>
	.container {
		display: block;
		border-block-start: 1px var(--border-style) var(--middleground-color);
	}

	.wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: start;
		justify-content: space-between;
		font-size: var(--small);
		color: var(--low-contrast-color);
		gap: var(--3x-small) 1ch;
		margin-inline: auto;
		margin-bottom: max(var(--safe-bottom), var(--6x-large));
		overflow: hidden;
	}

	.about {
		display: flex;
		flex-flow: row wrap;
		padding: 0;
		margin: 0;
		li {
			list-style: inside;
			margin-inline-start: 1ch;
			&:first-child {
				list-style-type: none;
				margin-inline-start: 0;
			}
		}
	}
</style>