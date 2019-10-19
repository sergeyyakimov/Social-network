import React from 'react';
import {connect} from 'react-redux';
import Header from './Header.jsx';
import {getAuthUserData} from './../../Redux/auth-reducer.js';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getAuthUserData();
		/*authAPI.me().then(response => {
			console.log(response);
			if (response.data.resultCode === 0) {

				let {id, login, email} = response.data.data;
				this.props.setAuthUserData(id, email, login);
			}
		});*/
	}
	
	render() {

		return <Header {...this.props} />
		
	}	
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth,login: state.auth.login});


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
