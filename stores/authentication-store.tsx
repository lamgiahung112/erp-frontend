import { createStore } from "@lamgiahung112/react-simple-store"
import { LoginRequest, LoginResult, RegisterRequest, RegisterResult, User } from '@/src/models/Auth.tsx';
import signIn from '@/src/apis/auth/sign-in.ts';


type AuthenticationStoreProps = {
	user: User | null,
	token: string | null,
	isUserLoaded: boolean
	loadUser(
		user:User ,
		token: string
	): void
  login(
    loginRequest: LoginRequest
  ): Promise<LoginResult | undefined>,
  register(
    signUpRequest: RegisterRequest
  ): RegisterResult
}

const authenticationStore = createStore<AuthenticationStoreProps>((set) => {
	return {
		user: null,
		token: null,
		isUserLoaded: false,
		loadUser(user, token) {
			localStorage.setItem("__auth__", token ?? "")
			set((prevState) => ({ ...prevState, user, token, isUserLoaded: true }))
		},
    async login(loginRequest:LoginRequest) {
      try {
        const signInResult = await signIn(loginRequest);
        return signInResult;
      } catch (error) {
        console.log('[Sign In] Error: ', error);
      }
    },
    logout() {

    },
    register(signUpRequest:RegisterRequest) {
      console.log('[Sign Up] Request: ', signUpRequest);
      return { } as RegisterResult
    }
	}
})

export default authenticationStore
