import React from "react"

import { Card } from "../components/Card"
import { UserTable } from "../components/UserTable"

export const AdminSearchUser = () => {
    const users = Array(15).fill(0);

    return (
        <>
            <div className="mt-8 max-w-2xl">
                <Card isFullHeigh={false}>
                    <p className="text-xl">Поиск пользователей</p>
                    <form className="flex flex-col w-full gap-6">
                        <div className="mt-4 flex gap-8">
                            <input placeholder="Имя пользователя" className="w-3/4 py-2 px-4 green-border rounded-md border-1 text-xl border-slate-200 focus:!border-green-600 focus:outline-0" />
                            <button type="button" className="w-1/2 btn-primary">Поиск</button>
                        </div>
                    </form>
                </Card>
            </div>
            <div className="mt-16 w-full">
                <h2 className="text-2xl font-bold">Список пользователей</h2>
                <div className={`mt-8 ${users.length >= 5 ? "h-96" : ""}`}>
                    <UserTable users={users} />
                </div>
            </div>
        </>
    )
}