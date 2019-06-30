import React from 'react';

const Page = ({ page, setYear }) => {
	function onBtnClick(e) {
		const year = +e.currentTarget.innerText;
		setYear(year);
	}

	const { year, photos } = page;
	return (
		<div>
			<div>
				<button onClick={onBtnClick}>2018</button>
				<button onClick={onBtnClick}>2017</button>
				<button onClick={onBtnClick}>2016</button>
				<button onClick={onBtnClick}>2015</button>
				<button onClick={onBtnClick}>2014</button>
			</div>
			<p>
				Do you have {photos.length} photos from {year}
			</p>
		</div>
	);
};

export default Page;
