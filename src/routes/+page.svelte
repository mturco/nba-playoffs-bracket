<script lang="ts">
	import type { PageData } from './$types';
	import Bracket from '../lib/Bracket.svelte';
	import Series from '../lib/Series.svelte';
	import Games from '$lib/Games.svelte';

	export let data: PageData;

	const year = parseInt(data.seasonYear, 10) + 1;
</script>

<svelte:head>
	<title>NBA Playoffs</title>
</svelte:head>

<main class="p-4 flex flex-col items-center">
	<h1 class="text-6xl mt-12 -mb-16 font-light">{year} NBA Playoffs</h1>

	<Bracket>
		{#each data.series as series}
			<Series {series} />
		{/each}
	</Bracket>

	<div class="mt-24">
		<Games games={data.nextGames} />
	</div>
</main>

<style>
	h1 {
		font-family: 'Barlow Semi Condensed', sans-serif;
	}
</style>
