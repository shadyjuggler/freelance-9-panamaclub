import React from "react"
import { UserTab } from "./UserTab"

export const Deposit = () => {
    return (
        <UserTab>
            <h2 className="text-2xl">Ввод</h2>
            <div className="flex justify-center h-full items-center pb-20">
                <form className="flex flex-col w-full max-w-2xl gap-6">
                    <div className="flex gap-8">
                        <input placeholder="Сумма" className="w-3/5 py-4 text-left px-4 green-border rounded-md border-1 text-xl border-slate-200 focus:!border-green-600 focus:outline-0"/>
                        <button type="button" className="w-2/5 btn-primary">Ввод</button>
                    </div>
                </form>
            </div>
        </UserTab>
    )
}