import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const FollowerCard = (props) => {
  const {
    avatar_url,
    id,
    login,
    url
  } = props.user;

  return (
    <div className="follower-card">
      <Card inverse style={{ backgroundColor: "forestgreen", margin: "2%"}}>
        <CardImg top width="100%" src={avatar_url} alt="Lyndsi's follower's face" />
        <CardBody>
          <CardTitle>Login: {login}</CardTitle>
          <CardSubtitle>ID: {id}</CardSubtitle>
          <CardText>Github URL: {url}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default FollowerCard;