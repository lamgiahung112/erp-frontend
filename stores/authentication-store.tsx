import { createStore } from "@lamgiahung112/react-simple-store"

type AuthenticationStoreProps = {
	user: {
		id: string
		fullName: string
		title: string
		username: string
	} | null
	token: string | null
	isUserLoaded: boolean
	loadUser(
		user: {
			id: string
			fullName: string
			title: string
			username: string
		} | null,
		token: string | null
	): void
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
	}
})

export default authenticationStore
