import React from "react"
import { Card } from "./Card"
import { NavLink } from "react-router"


export const Table = ({ transactions, readonly }) => {
    return (
        <Card isFullHeigh={true}>
            <div className="flex pb-2 justify-between border-b-1 border-slate-100">
                <p className="table-title">ID</p>
                <p className="table-title">Логин</p>
                <p className="table-title">Баланс</p>
                <p className="table-title">Реф баланс </p>
                <p className="table-title">Сумма </p>
                <p className="table-title">Статус</p>
            </div>

            <div className={`mt-4 h-full flex ${transactions.length >= 5 ? "pb-15" : ""} flex-col gap-3 overflow-y-scroll scrollable`}>
                {
                    transactions.map((type: string, i: number) => (
                        <NavLink to={"/admin/user/1"} key={i} className={`py-2 flex items-center rounded-lg border-b-1 border-slate-100`}>
                            <p className="w-full xl text-center font-bold">#144</p>
                            <p className="w-full xl text-center font-bold">abdul228</p>
                            <p className="w-full xl text-center"><span className={i % 2 === 1 ? "pointed" : ""}>100</span></p>
                            <p className="w-full xl text-center"><span className={i % 2 === 0 ? "pointed" : ""}>500</span></p>
                            <p className="w-full xl text-center">700</p>
                            <p className="w-full xl text-center flex gap-2 justify-center">
                                {
                                    readonly ?
                                        <div className={`py-1.5 px-4 text-center ${type === "plus" ? "bg-green" : "bg-red"} font-semibold rounded-md`}>
                                            {type === "plus" ? "Завершен" : "Отклонен"}
                                        </div>
                                        :
                                        <>
                                            <button className="cursor-pointer py-1 px-2.5 font-semibold bg-green rounded-md">Зав</button>
                                            <button className="cursor-pointer py-1 px-2.5 font-semibold bg-red rounded-md">Отк</button>
                                        </>
                                }

                            </p>
                        </NavLink>
                    )
                    )
                }
            </div>
        </Card >
    )
}