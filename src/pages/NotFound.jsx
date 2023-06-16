import { Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  if (countdown <= 0) {
    return <Navigate to={'/login'} />;
  }

  // &nbsp = {' '}
  return (
    <>
      <Heading
        display={'flex'}
        justifyContent={'center'}
        mt={'20px'}
        mb={'10px'}
      >
        Page not found!
      </Heading>
      <Text display={'flex'} justifyContent={'center'} fontSize={'20px'}>
        Auto redirect after&nbsp;
        <span style={{ color: 'red' }}>{countdown}</span>
      </Text>
    </>
  );
};
