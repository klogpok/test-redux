import React from 'react';

const Page = ({ page, getPhotos }) => {
	function onBtnClick(e) {
		const year = +e.currentTarget.innerText;
		getPhotos(year);
	}

	const { year, photos, isFetching } = page;
	return (
		<div className="ib page">
			<div>
				<button onClick={onBtnClick}>2018</button>
				<button onClick={onBtnClick}>2017</button>
				<button onClick={onBtnClick}>2016</button>
				<button onClick={onBtnClick}>2015</button>
				<button onClick={onBtnClick}>2014</button>
			</div>
			<h3>{year} год</h3>
			{isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
		</div>
	);
};

export default Page;
