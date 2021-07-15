import React from "react"
import { Redirect } from "react-router"

export const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component {
        render() {
            if (this.props.isAuth === false)  return <Redirect to = '/login'></Redirect>
            return <Component {...this.props}></Component>
        }
    }
    return AuthRedirect
}

