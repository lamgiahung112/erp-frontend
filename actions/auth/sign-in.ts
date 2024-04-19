import axiosClient from "@/utilities/axios.ts";

type SignInResult = {
	user: {
		id: string
		username: string
		title: string
		fullName: string
	}
	token: string
}

async function signIn({ username, password }: { username: string; password: string }) {
	return axiosClient
		.post("/api/auth/signin", {
			username,
			password,
		})
		.then((res) => res.data.payload as SignInResult)
}

export default signIn
