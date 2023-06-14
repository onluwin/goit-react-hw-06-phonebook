import { useDispatch, useSelector } from 'react-redux';
import { LoginBtn } from './AuthBtns/LoginBtn';
import { SignupBtn } from './AuthBtns/SignupBtn';
import { selectIsLoggedIn } from 'redux/selectors';
import { Link } from 'react-router-dom';
import { logout } from 'redux/auth/operations';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header style={{ backgroundColor: 'gray', height: '70px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'end',
          marginRight: '15px',
          marginLeft: '15px',
        }}
      >
        {isLoggedIn ? (
          <>
            <Link to={'/contacts'}>Contacts</Link>
            <button
              type="button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <div className="user-menu">
            <LoginBtn />
            <SignupBtn />
          </div>
        )}
      </div>
    </header>
  );
};
