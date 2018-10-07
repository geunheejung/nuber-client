import React from "react";
import {graphql} from "react-apollo";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import {IS_LOGGED_IN} from "./AppQueries.local";
import {ThemeProvider} from '../../typed-componets';
import theme from '../../theme';
import AppPresenter from './AppPresenter';

const AppContainer = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={props.data.auth.isLoggedIn}/>
      </ThemeProvider>
      <ToastContainer
        draggable={true}
        position={toast.POSITION.BOTTOM_CENTER}
      />
    </React.Fragment>
  )
}

export default graphql(IS_LOGGED_IN)(AppContainer);