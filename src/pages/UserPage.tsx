import React from "react"

import { UserNavigation } from "../components/UserNavigation"
import { Cabinet } from "../components/Cabinet"
import { UserRegister } from "../components/UserRegister"
import { UserSettings } from "../components/UserSettings"
import { Withdraw } from "../components/Withdraw"
import { Deposit } from "../components/Deposit"

import { useState } from "react"
import { UserContent } from "../enums/UserConent"

export const UserPage = () => {
    const [content, setContent] = useState<React.JSX.Element>(<Cabinet/>);

    const toggleContent = (sectionName: string) => {
        switch (sectionName) {
            case UserContent.Cabinet:
                setContent(<Cabinet />)
                break;
            case UserContent.UserRegister:
                setContent(<UserRegister />)
                break;
            case UserContent.Settings:
                setContent(<UserSettings />)
                break;
            case UserContent.Deposit:
                setContent(<Deposit />)
                break;
            case UserContent.WithDraw:
                setContent(<Withdraw />)
            default:
                "unknown section"
                break;
        }
    }

    return (
        <div className="w-full flex h-screen bg-slate-100">
            <UserNavigation contentName={content.type.name} toggleContent={toggleContent} />
            {
                content
            }
        </div>
    )
}