import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  const text = isLoggedIn ? 'Clear' : 'Out';
  return (
    <span>{text}</span>
  )
}

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default AppPresenter;