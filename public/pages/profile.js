import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const Profile = () => (
  <div style={{margin: '20px'}}>
    <Card>
      <CardHeader
        title="Profile"
        subtitle="this is profile page." />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </div>
);

export default Profile;
