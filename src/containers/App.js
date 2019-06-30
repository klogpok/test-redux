import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import { setYear } from '../actions/PageActions';

class App extends React.Component {
	render() {
		const { user, page, setYearAction } = this.props;

		return (
			<div>
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<User user={user} />
				<Page page={page} setYear={setYearAction} />
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
		setYearAction: year => dispatch(setYear(year))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
