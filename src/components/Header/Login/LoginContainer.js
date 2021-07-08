import React from 'react'
import * as axios from 'axios'
import { loginUserAC } from '../../Redux/login-reducer';
import { connect } from 'react-redux';
import Login from './Login';

class LoginClass extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.loginUser(response)
            });
    }
    render() {
        return <>
            {this.props.isAuth.isAuth === true ? <div>{this.props.login.login}</div> : <Login/>}
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
    }
};


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginClass)

export default LoginContainer