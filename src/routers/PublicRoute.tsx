import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}:any) => {
    return (
        <div>
            <Route {...rest}
            component = {
                (props:any) =>(
                    (!isAuthenticated)
                    ? (<Component {...props} />)
                    :(<Redirect to="/" />)
                )
            }
            />
        </div>
    )
}



