import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({
  request: async (operation: Operation) => {
    // graphql에서 query를 request하기전에 가로챌 수 있다.

    const getContextConfig = () => {
      const XJWT = 'X-JWT';
      return {
        headers: {
          [XJWT]: localStorage.getItem(`jwt`) || '',
        },
      };
    };

    operation.setContext(getContextConfig());
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
