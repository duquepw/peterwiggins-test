import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  return (
    <form>
      <Input name="email" label="E-mail:" />
      <Input name="senha" label="Senha:" type="password" />
      <Button />
    </form>
  );
}

export default Login;
