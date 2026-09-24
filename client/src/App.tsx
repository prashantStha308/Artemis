import { BrowserRouter } from "react-router-dom"
import AppContent from "@/app/AppContent.tsx";

// cursor
import Cursor from "./components/ui/Cursor";


function App() {

	return (
		<>
			<BrowserRouter>
				<AppContent />
			</BrowserRouter>

			<Cursor />
		</>
	)
}

export default App
