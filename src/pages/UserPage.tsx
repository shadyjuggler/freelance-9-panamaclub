import React from "react"

import { Navigation } from "../components/Navigation"
import { Cabinet } from "../components/Cabinet"

export const UserPage = () => {
    return (
        <div className="w-full flex h-full bg-slate-100">
            <Navigation/>
            <Cabinet/>
        </div>
    )
}