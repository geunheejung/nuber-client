import React from "react";
import Helmet from "react-helmet";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Form from '../../components/Form';
import Input from "../../components/Input";
import styled from "../../typed-componets";
import { MutationFn } from "react-apollo";

const Container = styled.div``;

const ExtendedForm = styled(Form)`

`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  verificationKey: string;
  loading: boolean;
  onSubmit: MutationFn;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const VerifyPhonePresenter: React.SFC<IProps> = ({ 
  verificationKey, 
  loading,
  onChange,
  onSubmit }) => (
  <Container>
    <Helmet>
      <title>Verify Phone | Number</title>
    </Helmet>
    <Header backTo={"/phone-login"} title={"Verify Phone Number"} />
    <ExtendedForm
      submitFn={onSubmit}
    >
      <ExtendedInput
        value={verificationKey}
        name="verificationKey"
        placeholder={"Enter Verification Code"}
        onChange={onChange}
      />
      <Button 
        value={loading ? "Verifying" : "Submit"} 
        disabled={loading}
        onClick={null} 
      />
    </ExtendedForm>
  </Container>
);

export default VerifyPhonePresenter