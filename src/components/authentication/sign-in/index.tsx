import signIn from '@/src/apis/auth/sign-in.ts';
import authenticationStore from '@/stores/authentication-store';
import { useStore } from '@lamgiahung112/react-simple-store';
import { useMutation } from '@tanstack/react-query';
import { FormEventHandler, useRef } from 'react';
import { toast } from 'react-toastify';

function SignInForm() {
  const { loadUser } = useStore(authenticationStore);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signinMutation = useMutation({
    mutationFn: signIn,
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const handleLogin = signinMutation
      .mutateAsync({
        username: usernameRef.current!.value,
        password: passwordRef.current!.value,
      })
      .then((result) => {
        loadUser(result.user, result.token);
      });
    toast.promise(
      handleLogin,
      {
        pending: "Please wait while we're signing you in!",
        success: 'You are successfully signed in!',
        error: 'There was an error signing you in!',
      },
      {
        position: 'top-center',
      },
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="username" ref={usernameRef} />
      <input type="password" name="password" placeholder="password" ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;
