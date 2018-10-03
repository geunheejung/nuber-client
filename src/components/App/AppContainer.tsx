import React from "react";
import { graphql } from "react-apollo";
import reset from 'styled-reset';
import { IS_LOGGED_IN } from "./AppQueries";
import { injectGlobal, ThemeProvider } from '../../typed-componets';
import theme from '../../theme';
import AppPresenter from './AppPresenter';

// tslint:disable-next-line
injectGlobal`
    ${reset}
`;

const AppContainer = (props) => {
    console.log(props);
    return (
        <ThemeProvider theme={theme}>
            <AppPresenter isLoggedIn={props.data.auth.isLoggedIn}/>
        </ThemeProvider>
    )
}

export default graphql(IS_LOGGED_IN)(AppContainer);