import React from 'react';

const UserCard = (props) => {
  const {
    avatar_url,
    id,
    name,
    login,
    location,
    url,
    bio,
    followers
  } = props.user;

  return (
    <div>
      <img src={avatar_url} alt="Lyndsi's profile picture" />
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Login: {login}</p>
      <p>Location: {location}</p>
      <p>Github URL: {url}</p>
      <p>Bio: {bio}</p>
      <p>Follower count: {followers}</p>
      {/* <Followers /> */}
    </div>
  );
}

export default UserCard;