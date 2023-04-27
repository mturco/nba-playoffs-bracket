<div><slot /></div>

<style>
	div {
		display: grid;
		grid-template-columns: 6rem 10rem 6rem 6rem 10rem 6rem 12rem;
		grid-template-rows: 7rem 7rem 2rem 7rem 2rem 7rem 7rem 7rem;
		grid-template-areas:
			'r1-0  r1-0  .      .      .      .     r1-4'
			'.     csf-0 csf-0  .      .      csf-2 csf-2'
			'r1-1  r1-1  .      .      .      .     r1-5'
			'.     .     .      finals .      .     .    '
			'.     .     cf-0   .      cf-1   .     .    '
			'r1-2  r1-2  .      .      .      .     r1-6'
			'.     csf-1 csf-1  .      .      csf-3 csf-3'
			'r1-3  r1-3  .      .      .      .     r1-7';
		gap: 1rem 3rem;
	}
</style>
