import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="col-md-2 mb-3">
        <img src={picture} alt="Profile" className="profile-picture" />
      </div>
      <div className="text-center">
        <h2>{name}</h2>
        <p className="lead text-muted">{email}</p>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
