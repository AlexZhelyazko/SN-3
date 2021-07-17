import React from 'react'
import { AuthUserTC, loginUserAC } from '../../Redux/login-reducer';
import { connect } from 'react-redux';
import Buttons from '../RegisterButtons/buttons';
import Login from './Login';

class LoginClass extends React.Component {
    componentDidMount = () => {
        this.props.authUser()   
    }
    render() {
        return <>
            {this.props.isAuth.isAuth === true ? <div>{this.props.login.login}</div> : <Buttons/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login,
        login: state.login,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (data) => { dispatch(loginUserAC(data)) },
        authUser: () => {dispatch(AuthUserTC())}
    }
};


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginClass)

export default LoginContainer