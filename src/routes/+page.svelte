<script lang="ts">
	import { Image } from '@unpic/svelte';

	export let data;

	const { posts } = data;
	console.log(posts);
</script>

<section>
	<h1>Nils' Photo Blog</h1>
</section>

<section>
	<h2>Posts</h2>

	{#each posts as { _id, title, images, date } (_id)}
		<article>
			<h3>{title}</h3>

			{#each images as { _key, asset, alt } (_key)}
				<Image
					src={asset.url}
					layout="constrained"
					width={asset.metadata.dimensions.width}
					height={asset.metadata.dimensions.height}
					background={asset.metadata.lqip}
					{alt}
				/>
			{/each}
		</article>
	{/each}
</section>
