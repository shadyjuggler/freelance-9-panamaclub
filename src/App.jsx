import { LoginPage } from "./pages/LoginPage"
import { UserPage } from "./pages/UserPage"
import { AdminInspectUserPage } from "./pages/AdminInspectUserPage"
import { AdminWithdrawsPage } from "./pages/AdminWithdrawsPage"

function App() {
	const transactions = Array(18).fill(0).map(() => {
        return Math.floor(Math.random() * 10) % 2 === 1 ? "plus" : "minus";
    });


	return (
		<div className="bg-white">
			{/* <UserPage/> */}
			{/* <AdminInspectUserPage transactions={transactions}/> */}
			<AdminWithdrawsPage transactions={transactions}/>
		</div>
	)
}

export default App
