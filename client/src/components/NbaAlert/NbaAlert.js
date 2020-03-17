import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const NbaAlert = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="dark" isOpen={visible} toggle={onDismiss}>
        <h4>Important Update</h4>
        Due to the NBA season being postponed, there are no live games for us to show. 
    </Alert>
  );
}

export default NbaAlert;