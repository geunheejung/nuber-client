import React from "react";
import _ from 'lodash';
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { verifyPhone, verifyPhoneVariables } from "../../types/api";
import { VERIFY_PHONE } from "./VerifyPhoneQueries";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "../../sharedQueries.local";

interface IProps extends RouteComponentProps<any> {
  logUserIn: MutationFn
}

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
      <Mutation mutation={LOG_USER_IN}>
        {(logUserIn) => {
          return (
            <VerifyMutation
              mutation={VERIFY_PHONE}
              variables={{
                key: verificationKey,
                phoneNumber
              }}      
              // update와 onCompleted의 차이점은 함수가 제공하는 인수이다.
              // onCompleted는 쿼리에서 반환 된 데이터로 호출되지만
              // update는 쿼리의 데이터와 캐시를 업데이트하는 데 사용한다.
              onCompleted={(data) => {
                const { CompletePhoneVerification } = data;
                if (CompletePhoneVerification.ok) {
                  if (CompletePhoneVerification.token) {
                    this.props.logUserIn({
                      variables: {
                        token: CompletePhoneVerification.token
                      }
                    });
                  }            
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
          )
        }}
      </Mutation>      
    );
  }
}
// graphql HOC로 mutation을 추가하는것은 구방식이다.
export default VerifyPhoneContainer;