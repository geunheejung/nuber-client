import ApolloClient, { Operation } from 'apollo-boost';
import tokenService from './services/tokenService';

const TYPE_NAME = {
  AUTH: 'Auth',
};

const getContextConfig = () => {
  return {
    headers: {
      'X-JWT': tokenService.getToken(),
    },
  };
};

const initalState = {
  defaults: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: !!tokenService.getToken(),
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache }) => {
        tokenService.setToken(token);
        cache.writeData({
          data: {
            auth: {
              __typename: TYPE_NAME.AUTH,
              isLoggedIn: true,
            },
          },
        });
      },
      logUserOut: (_, __, { cache }) => {
        tokenService.removeToken();

        cache.writeData({
          data: {
            __typename: TYPE_NAME.AUTH,
            isLoggedIn: false,
          },
        });

        return null;
      },
    },
  },
};

const client = new ApolloClient({
  clientState: initalState,
  request: async (operation: Operation) => {
    // graphql에서 query를 request하기전에 가로챌 수 있다.
    operation.setContext(getContextConfig());
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
