<script lang="ts">
	export let team: string | null;
	export let rank: number;
	export let wins: number;
	export let isFinals = false;

	const invertTeams = ['BKN', 'BOS', 'CHA', 'DEN', 'IND', 'LAL', 'MIN', 'NOP', 'SAS'];

	function getSizeClasses() {
		return isFinals ? 'w-56 h-16' : 'w-40 h-11';
	}

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

<div class={`${getTeamClasses(team)} ${getSizeClasses()} box-border overflow-hidden relative`}>
	{#if team}
		<div class="p-3 flex items-center h-full">
			<span class="text-white/40 text-sm mr-2">{rank}</span>
			<span class="text-white font-medium">{team}</span>
			<span class="text-white text-xl ml-auto">{wins}</span>
		</div>
		<img
			src={`/teams/${team}-bw.svg`}
			alt={`${team} logo`}
			class={`${getLogoClasses(team)} absolute inset-0 w-2/3 h-full object-cover mx-auto`}
		/>
	{/if}
</div>

<style>
	img {
		object-position: center 33.33333%;
		opacity: 0.15;
	}

	.override-CHI,
	.override-PHX {
		opacity: 0.25;
	}

	.override-DEN,
	.override-MIN,
	.override-LAL {
		opacity: 0.1;
	}
</style>
