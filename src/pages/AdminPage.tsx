import React from "react"
import { AdminWithdraw } from "./AdminWithdraw";
import { AdminNavigation } from "../components/AdminNavigation";
import { AdminSearchUser } from "./AdminSearchUser";

import { useState } from "react";

export const AdminPage = ({ transactions }) => {
    const [content, setContent] = useState("withdraw");

    return (
        <div className="w-full flex h-full px-6 py-8 mx-auto flex-col bg-slate-50" style={{ maxWidth: "1250px" }}>
            <AdminNavigation content={content} setContent={setContent} />
            {
                content === "withdraw" ?
                    <AdminWithdraw transactions={transactions} />
                    :
                    content === "search" ?
                        <AdminSearchUser/>
                        :
                        <></>
            }
            {/* <AdminInspectUserPage transactions={transactions}/> */}
        </div>
    )
}