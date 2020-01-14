import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Profile extends React.Component {
  state = { user: null };

  componentDidMount() {
    axios.get("https://api.github.com/users/lyndsiWilliams")
    .then(response => {
      console.log(response.data);
      this.setState({ user: response.data });
    })
    .catch(error => {
      console.log("No github user data returned", error)
    })
  }

  render() {
    const { user } = this.state;

    if (user === null) {
      return <div>Loading...</div>
    }

    return (
      <UserCard user={user} />
    );
  }
}

export default Profile;