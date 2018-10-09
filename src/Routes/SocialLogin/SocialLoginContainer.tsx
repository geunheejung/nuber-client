import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import SocialLoginPresenter from "./SocialLoginPresenter";
import { Mutation } from "react-apollo";
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import { FACEBOOK_CONNECT } from "./SocialLoginQueries";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "src/sharedQueries.local";

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
  public facebookMutation: any;

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      fbId: ''
    }
  }

  public render() {
    // const { firstName, lastName, email, fbId } = this.state;
    return (
      <Mutation mutation={LOG_USER_IN}>
        {(logUserIn) => (
          <LoginMutation
            mutation={FACEBOOK_CONNECT}
            onCompleted={(data) => {
              const { FacebookConnect } = data;
              if (FacebookConnect.ok) {
                logUserIn({
                  variables: {
                    token: FacebookConnect.token
                  }
                })
              } else {
                toast.error(FacebookConnect.error);
              }
            }}
          >
            {(facebookMutation, { loading }) => {
              this.facebookMutation = facebookMutation;
              return (
                <SocialLoginPresenter
                  loginCallback={this.loginCallBack}
                />
              )
            }}
          </LoginMutation>
        )}
      </Mutation>
    )
  }

  public loginCallBack = (response) => {
    const {
      name,
      first_name,
      last_name,
      email,
      id,
      accessToken
    } = response;

    if (accessToken) {
      this.facebookMutation({
        variables: {
          firstName: first_name,
          lastName: last_name,
          email,
          fbId: id,
        }
      });
      toast.success(`Welcome ${name}! 👐`)
    } else {
      toast.error('Could not log you in 😰');
    }
  }
}

export default SocialLoginContainer;