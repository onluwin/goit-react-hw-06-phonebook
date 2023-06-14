import { Link } from 'react-router-dom';

export const LoginBtn = () => {
  return (
    <button type="button" style={{ marginRight: '15px' }}>
      <Link to={'/login'}>Login</Link>
    </button>
  );
};
