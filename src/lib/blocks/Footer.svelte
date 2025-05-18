<script lang="ts">
    import Link from "$lib/components/Link.svelte";
</script>

<footer class="container semantic dark">
	<div class="wrapper">
		<span class="copyright">
			&copy; {new Date().getFullYear()}
			<Link to="https://heyjes.dev/">Joshua Elijah Sandoval.</Link>
		</span>
		<ul class="about">
			<li><Link to="https://github.com/JoshuaSand0val/semantic-props/">Github</Link></li>
			<li class="version">v2.0.0 (MIT)</li>
		</ul>
	</div>
</footer>

<style>
	.container {
		display: block;
		background-color: var(--secondary-body-color);
		--primary-accent-color: var(--primary-gray);
	}

	.wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: start;
		inline-size: min(100%, var(--largest-container));
		font-size: var(--small);
		font-family: var(--body-family);
		color: var(--fifth-text-color);
		gap: var(--3x-small) 1ch;
		padding-top: var(--medium);
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-bottom: max(var(--safe-bottom), var(--medium));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
		overflow: hidden;
	}

	.about {
		display: flex;
		flex-flow: row wrap;
		margin-block: 0;
		margin-inline: auto 0;
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