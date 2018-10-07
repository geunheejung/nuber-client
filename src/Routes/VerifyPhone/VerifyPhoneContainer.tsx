import React from "react";
import _ from 'lodash';
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { verifyPhone, verifyPhoneVariables } from "../../types/api";
import { VERIFY_PHONE } from "./VerifyPhoneQueries";
import { toast } from "react-toastify";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  verificationKey: string;
  phoneNumber: string;
}

class VerifyMutation extends Mutation<verifyPhone, verifyPhoneVariables> {

}

class VerifyPhoneContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    if (_.isEmpty(props.location.state)) {
      props.history.push("/");
    }

    this.state = {
      verificationKey: '',
      phoneNumber: props.location.state.phone
    }
  }
  
  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
    const {
      target: { name, value }
    } = event;

    this.setState({
      [name]: value
    } as any);
  }

  public render() {
    const { verificationKey, phoneNumber } = this.state;
    return (
      <VerifyMutation
        mutation={VERIFY_PHONE}
        variables={{
          key: verificationKey,
          phoneNumber
        }}
        onCompleted={(data) => {
          const { CompletePhoneVerification } = data;
          if (CompletePhoneVerification.ok) {
            toast.success(`You're verified, loggin in now`);
          } else {
            toast.error(CompletePhoneVerification.error);
          }
        }}
      >
        {(mutation, { loading }) => (
          <VerifyPhonePresenter 
            onSubmit={mutation}
            onChange={this.onInputChange}
            verificationKey={verificationKey}
            loading={loading}
          />
        )}
      </VerifyMutation>
    );
  }
}
 export default VerifyPhoneContainer;