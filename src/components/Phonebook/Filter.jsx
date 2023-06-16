import { Input } from '@chakra-ui/react';

export const Filter = ({ onInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Input mb={'10px'} w={'100%'} onChange={onInput} />
    </>
  );
};
