import { KeyIcon, UserIcon } from '@heroicons/react/16/solid';


export const LoginPages = () => {

  return (
    <>
      <div className="wrapper rounded border-4 shadow-[0_0_10px_rgba(255,255,255,2)] p-4">
        <form className="text-white text-center flex flex-col min-w-[40rem] items-center min-h-[27rem] justify-center" action="">
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

          <button className="w-[10rem] mt-3 bg-sky-300 border-2 text-white rounded p-1" type="submit">
            Login
          </button>
        </form>
      </div>
    </>);
};
