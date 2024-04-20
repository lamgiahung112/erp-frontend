import { LoginForm } from '@/src/components/form/login-form.tsx';
import { RegisterForm } from '@/src/components/form/register-form.tsx';
import { useState } from 'react';


export const LoginPages = () => {
 const [isLoginForm, setToggleForm] = useState(true);
  return (
    <>
      { isLoginForm ? <LoginForm setToggleForm={setToggleForm}/> : <RegisterForm setToggleForm={setToggleForm}/>}
    </>);
};
