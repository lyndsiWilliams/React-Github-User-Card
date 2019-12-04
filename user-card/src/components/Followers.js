import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Followers extends React.Component {
  state = { followers: [] };

  componentDidMount() {
    axios.get("https://api.github.com/users/lyndsiWilliams/followers")
    .then(response => {
      console.log(response.data);
      this.setState({ followers: response.data });
    })
    .catch(error => {
      console.log("No github followers data returned", error)
    })
  }

  render() {
    const { followers } = this.state;

    // if (followers === null) {
    //   return <div>Loading...</div>
    // }

    return (
      followers.map((follower, index) => {
        return(
          <UserCard key={index} user={follower} />
        );
      })
    );
  }
}

export default Followers;