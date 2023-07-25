import { Route, Redirect } from "react-router-dom";


export default function RequireAuthRoute({component: Component, authenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                return authenticated ? (<Component {...props}/>
                ) : (
                    <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}></Redirect>
                )
            }}
        >

        </Route>
    )


}