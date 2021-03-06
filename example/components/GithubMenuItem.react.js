import PropTypes from 'prop-types';
import React from 'react';

const GithubMenuItem = ({user}) => (
  <div>
    <img
      src={user.avatar_url}
      style={{
        height: '24px',
        marginRight: '10px',
        width: '24px',
      }}
    />
    <span>{user.login}</span>
  </div>
);

GithubMenuItem.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default GithubMenuItem;
