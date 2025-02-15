import React from "react"

import { Navigation } from "../components/Navigation"
import { Cabinet } from "../components/Cabinet"
import { UserRegister } from "../components/UserRegister"
import { UserSettings } from "../components/UserSettings"

export const UserPage = () => {
    return (
        <div className="w-full flex h-screen bg-slate-100">
            <Navigation/>
            {/* <Cabinet/> */}
            <UserSettings/>
            {/* <UserRegister/> */}
        </div>
    )
}