<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
    import Link from "$lib/components/Link.svelte";
</script>

<Divider title="Table of Contents" open={false}>
	<ul class="list">
		<li><Link to="#builtwith">Built using Semantic Props</Link></li>
	</ul>
</Divider>

<style>
	.list {
		display: block;
		list-style: inside;
		padding: 0;
		margin: 0;
	}
</style>