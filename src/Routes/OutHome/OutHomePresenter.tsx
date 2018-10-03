import React from 'react';
import { RouteComponentProps } from 'react-router';


interface IProps extends RouteComponentProps<any>{}

const OutHomePresenter: React.SFC<IProps> = ({}) => {
  return (
    <span>Hello</span>
  );
}

export default OutHomePresenter;