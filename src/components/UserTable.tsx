import React from "react"
import { Card } from "./Card"

import { NavLink } from "react-router"

export const UserTable = ({ users }) => {

    return (
        <Card isFullHeigh={false}>
            <div className="flex pb-2 justify-between border-b-1 border-slate-100">
                <p className="table-title">Логин</p>
                <p className="table-title">ФИО</p>
                <p className="table-title">Почта</p>
                <p className="table-title">Баланс </p>
                <p className="table-title">Реф Баланс</p>
            </div>

            <div className={`mt-4 h-full flex ${users.length >= 5 ? "pb-15" : ""} flex-col gap-3 overflow-y-scroll scrollable`}>
                {
                    users.map((_: any, i: number) => (
                        <NavLink to={"/admin/user/1"} key={i} className={`py-2 flex items-center rounded-lg border-b-1 border-slate-100`}>
                            <p className="w-full xl text-center font-bold">abdul228</p>
                            <p className="w-full xl text-center font-bold">Абдул Магометов</p>
                            <p className="w-full xl text-center ">ibragim.asm@gmail.com</p>
                            <p className="w-full xl text-center">700</p>
                            <p className="w-full xl text-center">700</p>
                        </NavLink>
                    )
                    )
                }
            </div>
        </Card >
    )
}