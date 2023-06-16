import { Button } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const SignupBtn = () => {
  return (
    <Button colorScheme="yellow" type="button">
      <Link to={'/signup'}>Sign up</Link>
    </Button>
  );
};
