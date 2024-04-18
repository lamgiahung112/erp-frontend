import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import SignInForm from "./components/authentication/sign-in"
import NavigationBar from "./components/navigation-bar"
import { ToastContainer } from "react-toastify"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="flex flex-col bg-neutral-300 w-screen h-screen">
					<NavigationBar />
					<SignInForm />
				</div>
			</QueryClientProvider>
			<ToastContainer closeOnClick />
		</>
	)
}

export default App
