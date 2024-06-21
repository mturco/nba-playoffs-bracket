<div><slot /></div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(3, 8rem) 12rem repeat(3, 8rem);
		grid-template-rows: repeat(4, 6rem);
		grid-template-areas:
			'r1-0  csf-0 .      .      .      csf-2 r1-4'
			'r1-1  csf-0 cf-0   finals cf-1   csf-2 r1-5'
			'r1-2  csf-1 cf-0   finals cf-1   csf-3 r1-6'
			'r1-3  csf-1 .      .      .      csf-3 r1-7';
		gap: 2rem 0.5rem;
	}
</style>
