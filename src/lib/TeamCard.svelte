<script lang="ts">
	export let team: string | null;
	export let rank: number;
	export let wins: number;
	export let isFinals = false;
	export let isTop = false;

	// prettier-ignore
	const eastTeams = ['ATL','BKN','BOS','CHA','CHI','CLE','DET','IND','MIA','MIL','NYK','ORL','PHI','TOR','WAS'];

	function getSizeClasses() {
		return isFinals ? 'h-14' : '';
	}

	function getLogoClasses() {
		if (!team) return '';
		return `override-${team}`;
	}

	function getTeamClasses(team: string | null, wins: number) {
		if (!team) return '';
		return `border-${team}-bg bg-${team}-bg/20`;
	}

	function getProgressClasses(team: string | null, wins: number) {
		if (!team || !wins) return '';
		const anchor = isEast(team) ? 'right-0' : 'left-0';
		const border = isTop ? 'border-t-4' : 'border-b-4';
		const width = wins === 1 ? 'w-1/3' : wins === 2 ? 'w-2/3' : 'w-full';
		const shadow = wins === 4 ? (isEast(team) ? 'wins-progress-east' : 'wins-progress-west') : '';
		return `border-${team}-bg ${width} h-full shadow-${team}-bg ${border} ${shadow} ${anchor}`;
	}

	function isEast(team: string | null) {
		return team ? eastTeams.includes(team) : false;
	}
</script>

<div class={`${getSizeClasses()} ${getTeamClasses(team, wins)} relative`}>
	{#if team}
		<div class="p-3 flex-1 flex items-center h-full relative z-10">
			<span class="text-black/60 dark:text-white/60 text-xs mr-2">{rank}</span>
			<span class="font-medium">{team}</span>
			<span class="ml-auto font-medium">{wins}</span>
			<span class={`wins-progress absolute -z-10 ${getProgressClasses(team, wins)}`} />
		</div>
		<img
			src={`/teams/${team}-bw.svg`}
			alt={`${team} logo`}
			class={`${getLogoClasses()} absolute top-0 bottom-0 right-0 w-2/3 h-full object-cover mx-auto`}
		/>
	{/if}
</div>

<style>
	img {
		object-position: center 33.33333%;
		opacity: 0.08;
	}

	.wins-progress-west {
		box-shadow: var(--tw-shadow-color) -4px 0 inset;
	}

	.wins-progress-east {
		box-shadow: var(--tw-shadow-color) 4px 0 inset;
	}
</style>
