import React from 'react';
import { Route, Navigate } from 'react-router-dom'


const RequireUnauthRoute = ({component: Component, authenticated, ...rest}) => <>
<Route
    {...rest}
    render={props => {
      return authenticated ? (
        <Navigate to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
      ) : (
        <Component {...props}/>
      )
    }}
  />
</>;


export default RequireUnauthRoute;