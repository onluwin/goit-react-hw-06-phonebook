import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const LoginBtn = () => {
  return (
    <Button colorScheme="green" type="button" style={{ marginRight: '15px' }}>
      <Link to={'/login'}>Login</Link>
    </Button>
  );
};
