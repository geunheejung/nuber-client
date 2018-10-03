import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import { ThemeProvider } from '../../typed-componets';
import theme from '../../theme';
import AppPresenter from './AppPresenter';

const AppContainer = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <AppPresenter isLoggedIn={props.data.auth.isLoggedIn}/>
        </ThemeProvider>
    )
}

export default graphql(IS_LOGGED_IN)(AppContainer);