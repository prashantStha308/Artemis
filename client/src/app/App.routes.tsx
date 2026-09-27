import { Routes , Route } from "react-router-dom"
import HomePage from "@/pages/home/HomePage"
import TestPage from "@/pages/test/TestPage"


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/test" element={<TestPage />} />
		</Routes>
	)
}
