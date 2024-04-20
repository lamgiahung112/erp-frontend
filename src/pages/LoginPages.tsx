import { KeyIcon, UserIcon } from '@heroicons/react/16/solid';
import { useStore } from '@lamgiahung112/react-simple-store';
import authenticationStore from '@/stores/authentication-store.tsx';
import React, { FormEventHandler, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import signIn from '@/src/apis/auth/sign-in.ts';


export const LoginPages = () => {
  const { loadUser } = useStore(authenticationStore);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signInMutation = useMutation({
    mutationFn: signIn
  })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const handleLogin = signInMutation.mutateAsync({
      username: usernameRef.current!.value,
      password: passwordRef.current!.value
    }).then((res) => {
      loadUser(res.user, res.token);
    })

  }

  return (
    <>
      <div className="wrapper rounded border-4 shadow-[0_0_10px_rgba(255,255,255,2)] p-4">
        <form onSubmit={} className="text-white text-center flex flex-col min-w-[40rem] items-center min-h-[27rem] justify-center" action="">
          <h1 className="p-3 text-5xl mb-5 font-bold text-center">Sign In</h1>
          <div className="input-box flex p-3 w-[22rem]">
            <input className="border-2 rounded p-1 ps-2 w-full" type="text" placeholder={"Username"} required />
            <UserIcon className="ms-2 h-6 w-6"/>
          </div>

          <div className="input-box flex p-3 w-[22rem]">
            <input className="border-2 rounded p-1 ps-2 w-full" type="password" placeholder={"Password"} required />
            <KeyIcon className="ms-2 h-6 w-6"/>
          </div>

          <div className="forgot-remember flex justify-between p-3 w-[22rem]">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="w-[10rem] mt-3 bg-app_primary border-2 text-white rounded p-1" type="submit">
            Login
          </button>
        </form>
      </div>
    </>);
};
