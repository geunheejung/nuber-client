// graphql tags들을 입력하는 걸 가능하게 해준다.
import { gql } from 'apollo-boost';;

export const IS_LOGGED_IN = gql`
    {
        auth {
            isLoggedIn @client
        }
    }
`;