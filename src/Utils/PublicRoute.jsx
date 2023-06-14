import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const PublicRoute = ({ redirectTo, restricted, children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const shouldRedirect = isLoggedIn && restricted;
    if (shouldRedirect) {
      return navigate(redirectTo);
    }
  }, [navigate, isLoggedIn, restricted, redirectTo]);
  return children;
};
