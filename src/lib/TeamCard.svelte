<script lang="ts">
	export let team: string | null;
	export let rank: number;

	const invertTeams = ['BKN', 'BOS', 'CHA', 'DEN', 'IND', 'LAL', 'MIN', 'NOP', 'SAS'];

	function getTeamClasses(team: string | null) {
		if (!team) return '';

		const bg = `bg-${team}-bg`;
		const border = team !== 'BKN' ? `border-${team}-border border-r-4` : '';
		return `${bg} ${border}`;
	}

	function getLogoClasses(team: string | null) {
		if (!team) return '';

		const blend = invertTeams.includes(team) ? 'mix-blend-lighten' : 'mix-blend-darken';
		return `${blend} override-${team}`;
	}
</script>

<div
	class={`${getTeamClasses(team)} box-border w-48 h-16 flex items-center overflow-hidden relative`}
>
	{#if team}
		<div class="p-3">
			<span class="text-white/40 text-sm mr-1.5">{rank}</span>
			<span class="text-white font-medium">{team}</span>
		</div>
		<img
			src={`/teams/${team}-bw.svg`}
			alt={`${team} logo`}
			class={`${getLogoClasses(team)} absolute inset-0 w-2/3 h-full object-cover ml-auto`}
		/>
	{/if}
</div>

<style>
	img {
		object-position: right 33.33333%;
		opacity: 0.15;
	}

	.override-CHI,
	.override-PHX {
		opacity: 0.25;
	}
</style>
