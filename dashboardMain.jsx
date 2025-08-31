import React from 'react';
import Donor from './Donor';
import Volunteer from './Volunteer';
import Receiver from './Receiver';
import Admin from './Admin';

export default function DashboardMain({ user }) {
  if(!user) return <div>Please login</div>;

  switch(user.role){
    case 'donor': return <Donor user={user} />;
    case 'volunteer': return <Volunteer user={user} />;
    case 'receiver': return <Receiver user={user} />;
    case 'admin': return <Admin user={user} />;
    default: return <div>Unknown role</div>;
  }
}
