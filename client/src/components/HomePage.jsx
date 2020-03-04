import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Auth from '../utils/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
        <CardHeader title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <CardContent style={{ fontSize: '16px', color: 'green' }}>Welcome to the Sports App! </CardContent>
          ) : (
            <CardContent style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardContent>
          )}
      </Card>
    )
  }
};

export default HomePage;
