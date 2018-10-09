import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import SocialLoginPresenter from "./SocialLoginPresenter";
import { Mutation } from "react-apollo";
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import { FACEBOOK_CONNECT } from "./SocialLoginQueries";

class LoginMutation extends Mutation<
  facebookConnect,
  facebookConnectVariables
  > {

}

interface IState {
  firstName: string;
  lastName: string;
  email?: string;
  fbId: string;
}

interface IProps extends RouteComponentProps<any> {

}


class SocialLoginContainer extends React.Component<IProps, IState> {
  public mutation: any;
  public render() {
    const { firstName, lastName, email, fbId } = this.state;
    return (
      <LoginMutation
        mutation={FACEBOOK_CONNECT}
        variables={{
          firstName,
          lastName,
          email,
          fbId
        }}
      >
        {(facebookConnectFn, { loading }) => {
          this.mutation = facebookConnectFn;
          return (
            <SocialLoginPresenter
              loginCallback={facebookConnectFn}
            />
          )
        }}
      </LoginMutation>

    )
  }

  public callback = (fData) => {
    this.setState({
      email: fData.email,
    }, () => {
      this.mutation();
    })
  }
}

export default SocialLoginContainer;