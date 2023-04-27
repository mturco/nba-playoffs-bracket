<script lang="ts">
	import type { PageData } from './$types';
	import Bracket from '../lib/Bracket.svelte';
	import Series from '../lib/Series.svelte';

	export let data: PageData;

	function getTeamClasses(team: string) {
		const bg = `bg-${team}-bg`;
		const border =
			team !== 'BKN' ? `border-t-transparent border-${team}-border border-b-4 border-t-4` : '';
		return `${bg} ${border} box-border p-3 rounded-md m-1 shadow-lg w-48 h-14`;
	}
</script>

<svelte:head>
	<title>NBA Playoffs Bracket</title>
</svelte:head>

<main class="p-4 flex flex-col items-center">
	<h1 class="text-4xl">{data.seasonYear} NBA Playoffs</h1>

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
</style>
