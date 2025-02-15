import React from "react"

import { Navigation } from "../components/Navigation"
import { Cabinet } from "../components/Cabinet"
import { UserRegister } from "../components/UserRegister"

export const UserPage = () => {
    return (
        <div className="w-full flex h-full bg-slate-100">
            <Navigation/>
            <Cabinet/>
            {/* <UserRegister/> */}
        </div>
    )
}