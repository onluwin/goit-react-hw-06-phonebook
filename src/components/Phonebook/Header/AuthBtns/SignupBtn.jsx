import { Link } from 'react-router-dom';

export const SignupBtn = () => {
  return (
    <button type="button">
      <Link to={'/signup'}>Sign up</Link>
    </button>
  );
};
