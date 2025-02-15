import React from "react"

import { Navigation } from "../components/Navigation"
import { Cabinet } from "../components/Cabinet"
import { UserRegister } from "../components/UserRegister"
import { UserSettings } from "../components/UserSettings"
import { Deposit } from "../components/Deposit"
import { Withdraw } from "../components/Withdraw"
import { Card } from "../components/Card"
import { History } from "../components/History"
import { HistoryDetails } from "../components/HistoryDetails"


export const AdminPage = () => {
    const transactions = Array(18).fill(0).map(() => {
        return Math.floor(Math.random() * 10) % 2 === 1 ? "plus" : "minus";
    });

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
                    <div className=" flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Referrer</p>
                            </div>
                            <div className="w-1/2">
                                <p className="font-semibold field green-border">Антон Назаров</p>
                            </div>
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Name Surname</p>
                            </div>
                            <div className="w-1/2">
                                <p className="font-semibold field green-border">Name Surname</p>
                            </div>
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Email</p>
                            </div>
                            <div className="w-1/2">
                                <p className="font-semibold field green-border">ibragim.asm@gmail.com</p>
                            </div>
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/4">
                                <p className="font-bold field green-border">Login</p>
                            </div>
                            <div className="w-1/2">
                                <p className="font-semibold field green-border">ibragim228</p>
                            </div>
                            <div className="w-1/4">
                                <p className="font-semibold field cursor-pointer green-border hoverprimary">Изменить</p>
                            </div>
                        </div>

                    </div>
                    <span></span>
                </Card>
            </div>

            <div className="mt-8">
                {/* <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                </label> */}

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