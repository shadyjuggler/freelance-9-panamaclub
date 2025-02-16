import { LoginPage } from "./pages/LoginPage"
import { UserPage } from "./pages/UserPage"
import { AdminPage } from "./pages/AdminPage"
import { AdminInspectUserPage } from "./pages/AdminInspectUserPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
	const transactions = Array(18).fill(0).map(() => {
		return Math.floor(Math.random() * 10) % 2 === 1 ? "plus" : "minus";
	});


	return (
		<BrowserRouter>
			<div className="bg-white">
				<Routes>
					<Route index element={<LoginPage />} />

					<Route path="dashboard" element={<UserPage />} />
					
					<Route path="admin" >
						<Route index element={<AdminPage transactions={transactions} />} />
						<Route path="user/:id" element={<AdminInspectUserPage transactions={transactions} />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>

	)
}

export default App
