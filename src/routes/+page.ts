import type { PageLoad } from './$types';
import type { PlayoffBracketData } from '../types';

const SEASON_YEAR = new Date().getFullYear() - 1;

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(
		`https://stats.nba.com/stats/playoffbracket?LeagueID=00&SeasonYear=${SEASON_YEAR}&State=2`,
	);
	const data = (await res.json()) as PlayoffBracketData;
	const { seasonYear, playoffBracketSeries } = data.bracket;

	return {
		seasonYear,
		firstRound: playoffBracketSeries.filter(({ roundNumber }) => roundNumber === 1),
		confSemiFinals: playoffBracketSeries.filter(({ roundNumber }) => roundNumber === 2),
		confFinals: playoffBracketSeries.filter(({ roundNumber }) => roundNumber === 3),
		finals: playoffBracketSeries.filter(({ roundNumber }) => roundNumber === 4),
	};
};
