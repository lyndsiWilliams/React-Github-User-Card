import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

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
    <div className="user-card">
      <Card inverse style={{ backgroundColor: "rgb(46, 46, 46)", width: "50%" }}>
        <CardImg top width="100%" src={avatar_url} alt="Lyndsi's face" />
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>
          <CardSubtitle>Login: {login}</CardSubtitle>
          <CardText>ID: {id}</CardText>
          <CardText>Location: {location}</CardText>
          <CardText>Github URL: {url}</CardText>
          <CardText>Bio: {bio}</CardText>
          <CardText>Follower count: {followers}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserCard;