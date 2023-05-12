export interface PlayoffBracketData {
	bracket: {
		seasonYear: string;
		playoffBracketSeries: PlayoffBracketSeries[];
	};
}

export interface PlayoffBracketSeries {
	roundNumber: number;
	seriesNumber: number;
	seriesWinner: number;
	displayOrderNumber: number;
	displayTopTeam: number;
	displayBottomTeam: number;

	highSeedId: number;
	highSeedTricode: string | null;
	highSeedRank: number;
	highSeedSeriesWins: number;

	lowSeedId: number;
	lowSeedTricode: string | null;
	lowSeedRank: number;
	lowSeedSeriesWins: number;

	nextGameId: string;
	nextGameNumber: string;
	nextGameDateTimeUTC: string;
	nextGameStatus: number;
	nextGameStatusText: string;
	nextGameBroadcasterDisplay: string;
}

export interface Game {
	id: string;
	number: string;
	statusText: string;
	dateTimeUtc: string;
	broadcaster: string;
	highSeedTricode: string | null;
	lowSeedTricode: string | null;
}
