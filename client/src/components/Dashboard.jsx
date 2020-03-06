import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardHeader
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardContent style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardContent>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
