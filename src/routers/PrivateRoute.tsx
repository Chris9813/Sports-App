import React from 'react'
import { Redirect, Route } from 'react-router'

type typeArgs = {

    isAuthenticated: Boolean,
    component: any,
}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}:any) => {
    localStorage.setItem("lastPath", rest.location.pathname)
    return (
        <div>
            <Route {...rest}
            component = {
                (props:any) =>(
                    (isAuthenticated)
                    ? (<Component {...props} />)
                    :(<Redirect to="/login" />)
                )
            }
            />
        </div>
    )
}


