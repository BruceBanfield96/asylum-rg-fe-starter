import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from 'auth0/auth0-react';
//import { Loading } from './components/common/loading';

const ProtectedRoute = component => (
  <Route component={withAuthenticationRequired(component)} />
);

export default ProtectedRoute;
