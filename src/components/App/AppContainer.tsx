import React from "react";
import { graphql } from "react-apollo";
import { SAY_HELLO } from "./AppQueries";

const AppContainer = (props) => {
    console.log(props.data.test.sayHello);
    return (
        <div>{JSON.stringify(props.data)}</div>
    )
}

export default graphql(SAY_HELLO)(AppContainer);