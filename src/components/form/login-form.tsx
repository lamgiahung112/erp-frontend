import { EyeIcon, EyeSlashIcon, KeyIcon, UserIcon } from '@heroicons/react/16/solid';
import React, { FormEventHandler, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import signIn from '@/src/apis/auth/sign-in.ts';
import { useStore } from '@lamgiahung112/react-simple-store';
import authenticationStore from '@/stores/authentication-store.tsx';

export interface LoginFormProps {
  setToggleForm: (isLogin: boolean) => void
}

export const LoginForm = (props:LoginFormProps) => {
  const { setToggleForm } = props
  const { loadUser } = useStore(authenticationStore);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isHidden, setHidePassword] = React.useState(true);

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
    <div className="wrapper rounded border-4 shadow-[0_0_10px_rgba(255,255,255,2)] p-4">
      <form onSubmit={handleSubmit}
            className="text-white flex flex-col min-w-[40rem] items-center min-h-[27rem] justify-center"
            action="">
        <h1 className="p-3 text-5xl mb-5 font-bold text-center">Sign In</h1>
        <div className="input-group flex flex-col p-3">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <div className="input-box flex w-[22rem]">
            <input className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none" type="text" placeholder={'Username'} required />
          </div>
        </div>

        <div className="input-group flex flex-col p-3">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Password:
          </label>
          <div className="input-box flex w-[22rem] relative items-center">
            <input className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none" type={isHidden ? 'password' : 'text'} placeholder={'Password'} required />
            {
              isHidden ? <EyeIcon className="absolute cursor-pointer text-black right-2 w-6 h-6"
                                  onClick={() => setHidePassword(!isHidden)} /> :
                <EyeSlashIcon className="absolute cursor-pointer text-black w-6 h-6 right-2"
                              onClick={() => setHidePassword(!isHidden)} />
            }
          </div>
        </div>

        <div className="forgot-remember flex justify-between p-3 w-[22rem]">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <div className="action flex space-x-2">
          <button className="w-[10rem] hover:bg-opacity-[0.5] mt-3 bg-app_primary border-2 text-white rounded p-1"
                  type="submit">
            Login
          </button>
          <button onClick={() => setToggleForm(false)}
                  className="w-[10rem] mt-3 hover:bg-opacity-[0.5] bg-app_secondary border-2 text-white rounded p-1"
                  type="submit">
            Register
          </button>
        </div>
      </form>
    </div>

  )
}