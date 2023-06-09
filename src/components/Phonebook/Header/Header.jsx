import { useDispatch, useSelector } from 'react-redux';
import { LoginBtn } from './AuthBtns/LoginBtn';
import { SignupBtn } from './AuthBtns/SignupBtn';
import { selectIsLoggedIn, selectUserEmail } from 'redux/selectors';
import { logout } from 'redux/auth/operations';
import { Box, Button, Text } from '@chakra-ui/react';

export const Header = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header
      style={{ display: 'flex', backgroundColor: 'purple', height: '70px' }}
    >
      {isLoggedIn && (
        <Text
          display={'flex'}
          ml={'15px'}
          mr={'auto'}
          alignItems={'center'}
          color={'white'}
          fontSize={'17px'}
          justifyContent={'start'}
        >
          Hello, {userEmail}
        </Text>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'end',
          marginRight: '15px',
          marginLeft: 'auto',
        }}
      >
        {isLoggedIn ? (
          <>
            <Button
              colorScheme="red"
              type="button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <Box ml={'auto'}>
            <LoginBtn />
            <SignupBtn />
          </Box>
        )}
      </div>
    </header>
  );
};
