import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from 'react-router-dom';
import { toast } from "react-toastify";
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { PHONE_SIGN_IN } from "./PhoneQueries";
import { startPhoneVerification, startPhoneVerificationVariables } from "../../types/api";

interface IState {
  countryCode: string;
  phoneNumber: string;
}

// Mutation클래스의 제네릭의 첫번째자리는 mutation이 반환하는 데이터에 대한것.
class PhoneSignInMutation extends Mutation<startPhoneVerification, startPhoneVerificationVariables> { }

class PhoneLoginContainer extends React.Component<RouteComponentProps<any>,
  IState> {
  public phoneMutation: MutationFn;
  public state = {
    countryCode: '+82',
    phoneNumber: '12345'
  }

  public onInputChage: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  }

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const { countryCode, phoneNumber } = this.state;
    const phone = `${countryCode}${phoneNumber}`;
    const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(phone);
    if (isValid) {
      this.phoneMutation();
    } else {
      toast.error("Please write a valid phone number");
    }
  };

  public render() {
    const { history } = this.props;
    const {
      countryCode,
      phoneNumber,
    } = this.state;

    return (
      <PhoneSignInMutation
        mutation={PHONE_SIGN_IN}
        variables={{
          phoneNumber: `${countryCode}${phoneNumber}`
        }}
        onCompleted={(data) => {
          const { StartPhoneVerification: { ok, error } } = data;
          const phone = `${countryCode}${phoneNumber}`;
          if (ok) {
            toast.success('SMS Sent! Redirecting you...');
            setTimeout(() => {
              history.push({
                pathname: '/verify-phone',
                state: {
                  phone,
                }
              });
            }, 2000);
          } else {
            toast.error(error);
          }
        }}
      >
        {(phoneMutation, { loading }) => {
          this.phoneMutation = phoneMutation;
          return (
            <PhoneLoginPresenter
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              onInputChage={this.onInputChage}
              onSubmit={this.onSubmit}
              loading={loading}
            />
          )
        }}
      </PhoneSignInMutation>

    )
  }
}

export default PhoneLoginContainer;