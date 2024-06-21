/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				ATL: { bg: '#E03A3E', border: '#FDB927' },
				BKN: { bg: '#000000', border: '#FFFFFF' },
				BOS: { bg: '#007A33', border: '#BA9653' },
				CHA: { bg: '#1D1160', border: '#00788C' },
				CHI: { bg: '#CE1141', border: '#000000' },
				CLE: { bg: '#860038', border: '#041E42' },
				DAL: { bg: '#00538C', border: '#002B5E' },
				DEN: { bg: '#0E2240', border: '#FEC524' },
				DET: { bg: '#C8102E', border: '#1D42BA' },
				GSW: { bg: '#1D428A', border: '#FFC72C' },
				HOU: { bg: '#CE1141', border: '#000000' },
				IND: { bg: '#002D62', border: '#FDBB30' },
				LAC: { bg: '#C8102E', border: '#1D428A' },
				LAL: { bg: '#552583', border: '#F9A01B' },
				MEM: { bg: '#5D76A9', border: '#12173F' },
				MIA: { bg: '#98002E', border: '#F9A01B' },
				MIL: { bg: '#00471B', border: '#EEE1C6' },
				MIN: { bg: '#0C2340', border: '#236192' },
				NOP: { bg: '#0C2340', border: '#C8102E' },
				NYK: { bg: '#006BB6', border: '#F58426' },
				OKC: { bg: '#007AC1', border: '#EF3B24' },
				ORL: { bg: '#0077C0', border: '#C4CED4' },
				PHI: { bg: '#006BB6', border: '#ED174C' },
				PHX: { bg: '#1D1160', border: '#E56020' },
				POR: { bg: '#E03A3E', border: '#000000' },
				SAC: { bg: '#5A2D81', border: '#63727A' },
				SAS: { bg: '#000000', border: '#C4CED4' },
				TOR: { bg: '#CE1141', border: '#000000' },
				UTA: { bg: '#002B5C', border: '#00471B' },
				WAS: { bg: '#002B5C', border: '#E31837' },
			},
		},
	},
	plugins: [],
	safelist: [
		{
			pattern:
				/(bg|border|text|shadow)-(MIA|LAL|BOS|LAC|BKN|CHA|CHI|ATL|PHX|DAL|DEN|DET|GSW|HOU|IND|MEM|MIL|MIN|NOP|NYK|OKC|ORL|PHI|POR|SAC|SAS|TOR|UTA|CLE|WAS)(-|$)/,
		},
	],
};
