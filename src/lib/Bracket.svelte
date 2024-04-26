<div><slot /></div>

<style>
	div {
		display: grid;
		grid-template-columns: 4rem 7rem 10rem 14rem 7rem 4rem 10rem;
		grid-template-rows: 6rem 6rem 6rem 1rem 6rem 6rem 6rem;
		grid-template-areas:
			'r1-0  r1-0  .      .      .      .     r1-4'
			'.     csf-0 csf-0  .      .      csf-2 csf-2'
			'r1-1  r1-1  .      .      .      .     r1-5'
			'.     .     cf-0   finals cf-1   .     .    '
			'r1-2  r1-2  .      .      .      .     r1-6'
			'.     csf-1 csf-1  .      .      csf-3 csf-3'
			'r1-3  r1-3  .      .      .      .     r1-7';
		gap: 1rem;
	}
</style>
