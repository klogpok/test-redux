import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import { getPhotos } from '../actions/PageActions';

class App extends React.Component {
	render() {
		const { user, page, getPhotosAction } = this.props;

		return (
			<div className="row">
				<header className="">
					<h1 className="">Мой топ фото</h1>
				</header>
				<User user={user} />
				<Page page={page} getPhotos={getPhotosAction} />
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
		page: store.page
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhotosAction: year => dispatch(getPhotos(year))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
