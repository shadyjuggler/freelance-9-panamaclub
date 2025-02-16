import React from "react"

import { Card } from "../components/Card"
import { History } from "../components/History"
import { HistoryDetails } from "../components/HistoryDetails"
import Toggle from 'react-toggle'
import { AdminPage } from "./AdminPage"


export const AdminInspectUserPage = ({ transactions }) => {
    return (
        <div className="w-full flex h-full px-6 py-8 mx-auto flex-col bg-slate-50" style={{ maxWidth: "1250px" }}>
            <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-300"></div>
                <div>
                    <p className="font-bold text-slate-900">Анатолий Бачинский</p>
                    <p className="text-sm font-semibold text-gray-500">aderoll322</p>
                </div>
            </div>
            <div className="mt-8 flex justify-between gap-24">
                <div className="w-full flex gap-4">
                    <div className="w-2/3 py-3 text-center green-border rounded-md ">Реферальный баланс</div>
                    <div className="w-1/3 py-3 text-center rounded-md border-1  border-slate-200">500</div>
                </div>
                <div className="w-full flex gap-4">
                    <div className="w-2/3 py-3 text-center green-border rounded-md ">Реферальный баланс</div>
                    <div className="w-1/3 py-3 text-center rounded-md border-1  border-slate-200">500</div>
                </div>
            </div>

            <div className="mt-16">
                <Card isFullHeigh={false}>
                    <form className=" flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Referrer</p>
                            </div>
                            <input className="w-1/2 font-semibold field green-border placeholder:text-slate-700" placeholder="Антон Назаров" />
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Name Surname</p>
                            </div>
                            <input className="w-1/2 font-semibold field green-border placeholder:text-slate-700" placeholder="Ибрагим Асманов" />
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Email</p>
                            </div>
                            <input className="w-1/2 font-semibold field green-border placeholder:text-slate-700" placeholder="ibragim.asm@gmail.com" />
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Login</p>
                            </div>
                            <input className="w-1/2 font-semibold field green-border placeholder:text-slate-700" placeholder="ibragim" />
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить</p>
                            </div>
                        </div>

                    </form>
                    <span></span>
                </Card>
            </div>

            <div className="mt-8">
                <Card isFullHeigh={false}>
                    <div className="flex gap-5 items-center px-4">
                        <p className="font-semibold">Баланс</p>
                        <Toggle className='toggler' defaultChecked={true} icons={false} />
                        <p className="font-semibold">Реферальный баланс</p>

                    </div>
                    <form className="flex flex-col w-full gap-6">
                        <div className="mt-4 flex gap-8">
                            <input placeholder="3200" className="w-3/4 py-4 text-center px-4 green-border rounded-md border-1 text-xl border-slate-200 focus:!border-green-600 focus:outline-0" />
                            <button type="button" className="w-1/4 btn-primary">Добавить</button>
                            <button type="button" className="w-1/4 btn-primary !border-0" style={{ background: "#FFD7D5" }}>Отнять</button>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="hide_transaction" name="hide_transaction" className="w-4 h-4 appearance-none border-1 border-green-500 rounded-sm checked:bg-green-500" />
                                <label htmlFor="hide_transaction" className="whitespace-nowrap text-lg">Спрятать транзакцию</label>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>

            <div className="mt-12 flex gap-4 h-140">
                <div className="basis-2/5">
                    <History data={transactions} />
                </div>

                <div className="basis-3/5">
                    <HistoryDetails data={transactions} />
                </div>
            </div>
        </div>
    )
}