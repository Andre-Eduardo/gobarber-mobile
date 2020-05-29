import React from 'react';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Background from '~/components/Background';
// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <Input
        style={{marginTop: 30}}
        icon="call"
        placeholder="digite seu nome"
      />
      <Button>entar</Button>
    </Background>
  );
};

export default SignIn;
