import React from "react"

import { Navigation } from "../components/Navigation"
import { Cabinet } from "../components/Cabinet"
import { UserRegister } from "../components/UserRegister"
import { UserSettings } from "../components/UserSettings"
import { Withdraw } from "../components/Withdraw"
import { Deposit } from "../components/Deposit"

export const UserPage = () => {
    return (
        <div className="w-full flex h-screen bg-slate-100">
            <Navigation/>
            {/* <Cabinet/> */}
            {/* <UserSettings/> */}
            {/* <Deposit/> */}
            <Withdraw/>
            {/* <UserRegister/> */}
        </div>
    )
}