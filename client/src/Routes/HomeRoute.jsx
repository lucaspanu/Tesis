import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Redirect
                    to={{
                        pathname: '/private',
                        state: { from: props.location }
                    }}
                />
                ) : (
                        <Component {...props} />
            )
        }
    ></Route>
);

export default PrivateRoute;