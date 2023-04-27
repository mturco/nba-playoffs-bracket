<script lang="ts">
	import type { PlayoffBracketSeries } from '../types';
	import TeamCard from '../lib/TeamCard.svelte';

	export let series: PlayoffBracketSeries;

	function getGridArea() {
		return {
			1: `r1-${series.displayOrderNumber}`,
			2: `csf-${series.displayOrderNumber}`,
			3: `cf-${series.displayOrderNumber}`,
			4: 'finals',
		}[series.roundNumber];
	}
</script>

<div style={`grid-area: ${getGridArea()}`}>
	<div class="inline-flex flex-col rounded-md overflow-hidden shadow-lg">
		{#if series.displayTopTeam === series.highSeedId}
			<TeamCard
				team={series.highSeedTricode}
				rank={series.highSeedRank}
				wins={series.highSeedSeriesWins}
			/>
			<TeamCard
				team={series.lowSeedTricode}
				rank={series.lowSeedRank}
				wins={series.lowSeedSeriesWins}
			/>
		{:else}
			<TeamCard
				team={series.lowSeedTricode}
				rank={series.lowSeedRank}
				wins={series.lowSeedSeriesWins}
			/>
			<TeamCard
				team={series.highSeedTricode}
				rank={series.highSeedRank}
				wins={series.highSeedSeriesWins}
			/>
		{/if}
	</div>
</div>

<style>
</style>
