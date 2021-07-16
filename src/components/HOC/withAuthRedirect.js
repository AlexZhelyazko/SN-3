import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

let mapStateForRedirect = (state) => {
    return {
        isAuth: state.login.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
        class AuthRedirect extends React.Component {
        render() {
            if (this.props.isAuth === false)  return <Redirect to = '/login'></Redirect>
            return <Component {...this.props}></Component>
        }
    }
    let AuthRedirectContainer = connect(mapStateForRedirect)(AuthRedirect);
    return AuthRedirectContainer
}

