<script lang="ts">
	import type { PlayoffBracketSeries } from '../types';
	import TeamCard from '../lib/TeamCard.svelte';

	export let series: PlayoffBracketSeries;

	function getGridArea() {
		return {
			1: `r1-${series.seriesNumber}`,
			2: `csf-${series.seriesNumber}`,
			3: `cf-${series.seriesNumber}`,
			4: 'finals',
		}[series.roundNumber];
	}
</script>

<div style={`grid-area: ${getGridArea()}`}>
	<!-- class={series.roundNumber === 4 ? 'place-self-center' : ''} -->
	<div class="inline-flex flex-col rounded-md overflow-hidden shadow-lg">
		<TeamCard team={series.highSeedTricode} rank={series.highSeedRank} />
		<TeamCard team={series.lowSeedTricode} rank={series.lowSeedRank} />
	</div>
</div>

<style>
</style>
