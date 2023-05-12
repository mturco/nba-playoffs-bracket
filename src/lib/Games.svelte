<script lang="ts">
	import { format, isToday, parseISO } from 'date-fns';
	import type { Game } from '../types';

	export let games: Map<string, Game[]>;
</script>

<section>
	<h1 class="text-3xl mb-8 text-center">Upcoming Games</h1>

	{#each Array.from(games.entries()) as [date, gamesForDate]}
		<h2 class="text-gray-600 dark:text-gray-400">
			{isToday(parseISO(date)) ? 'Today' : format(parseISO(date), 'EEEE, MMMM d')}
		</h2>

		<ol class="mb-8">
			{#each gamesForDate as game}
				<li class="my-2 p-4 rounded-md shadow-md bg-gray-200 dark:bg-gray-700">
					<p>
						<span class="font-medium">{game.highSeedTricode || '???'}</span> vs
						<span class="font-medium">{game.lowSeedTricode || '???'}</span>
						— {game.number}
					</p>
					<p class="text-gray-600 dark:text-gray-400">
						{#if game.statusText === 'TBD'}
							TBD
						{:else if game.broadcaster}
							{format(parseISO(game.dateTimeUtc), 'h:mm a')} on {game.broadcaster}
						{:else}
							{format(parseISO(game.dateTimeUtc), 'h:mm a')}
						{/if}
					</p>
				</li>
			{/each}
		</ol>
	{/each}
</section>
