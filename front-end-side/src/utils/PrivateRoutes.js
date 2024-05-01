import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
  const isAuthenticated = false 

  return (
    <Route {...rest}>{!isAuthenticated ? <Redirect to="/login" /> :   children}</Route>
    )
}

export default PrivateRoutes;
