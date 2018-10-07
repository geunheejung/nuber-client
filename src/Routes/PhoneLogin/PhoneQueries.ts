import { gql } from 'apollo-boost';

// apollo graphql에게 줄 operation의 이름
// 우리 서버가 할 operation
// apollo한테 이 변수들을 해결해달라할것
export const PHONE_SIGN_IN = gql`
  mutation startPhoneVerification($phoneNumber: String!) {
    StartPhoneVerification(phoneNumber: $phoneNumber) {
      ok
      error
    }
  }
`;