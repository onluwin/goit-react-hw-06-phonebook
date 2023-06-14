import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { useEffect } from 'react';

export const PrivateRoute = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate(redirectTo);
    }
  }, [navigate, isLoggedIn, redirectTo]);
  return children;
};
