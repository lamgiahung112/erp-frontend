import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signup');
  }, []);

  return (
    <>
      {/*<div className="flex flex-cl bg-neutral-300 w-screen h-screen">*/}
      {/*/!*  <NavigationBar />*!/*/}
      {/*/!*  <SignInForm />*!/*/}
      {/*</div>*/}
    </>);
}