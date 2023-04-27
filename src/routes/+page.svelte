<script lang="ts">
	import type { PageData } from './$types';
	import Bracket from '../lib/Bracket.svelte';
	import Series from '../lib/Series.svelte';

	export let data: PageData;

	const year = parseInt(data.seasonYear, 10) + 1;
</script>

<svelte:head>
	<title>NBA Playoffs</title>
</svelte:head>

<main class="p-4 flex flex-col items-center">
	<h1 class="text-6xl mt-12 mb-16 font-light">{year} NBA Playoffs</h1>

	<Bracket>
		{#each data.firstRound as series}
			<Series {series} />
		{/each}
		{#each data.confSemiFinals as series}
			<Series {series} />
		{/each}
		{#each data.confFinals as series}
			<Series {series} />
		{/each}
		{#each data.finals as series}
			<Series {series} />
		{/each}
	</Bracket>
</main>

<style>
	h1 {
		font-family: 'Barlow Semi Condensed', sans-serif;
	}
</style>
