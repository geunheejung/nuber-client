import React from "react";
import _ from 'lodash';
import { RouteComponentProps } from "react-router-dom";
import VerifyPhonePresenter from "./VerifyPhonePresenter";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  key: string;
}

class VerifyPhoneContainer extends React.Component<IProps, IState> {
  public state = {
    key: ''
  }

  constructor(props: IProps) {
    super(props);

    if (_.isEmpty(props.location.state)) {
      props.history.push("/");
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
    const { key } = this.state;
    return (
      <VerifyPhonePresenter 
        onChange={this.onInputChange}
        key={key}
      />
    );
  }
}
 export default VerifyPhoneContainer;