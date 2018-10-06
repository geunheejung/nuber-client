import React from "react";
import {RouteComponentProps} from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLogiPresenter';

interface IState {
  countryCode: string;
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<RouteComponentProps<any>,
  IState> {
  public state = {
    countryCode: '+82',
    phoneNumber: '12345'
  }

  public onInputChage: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
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
    console.log('countryCode, phoneNumber :', countryCode, phoneNumber);
  }

  public render() {
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChage={this.onInputChage}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default PhoneLoginContainer;