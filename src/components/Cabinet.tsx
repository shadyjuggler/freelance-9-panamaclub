import React from "react"

import { History } from "./History"
import { HistoryDetails } from "./HistoryDetails"

export const Cabinet = () => {
    const transactions = Array(18).fill(0).map(() => {
        return Math.floor(Math.random() * 10) % 2 === 1 ? "plus" : "minus";
    });

    return (
        <div className="w-full h-full py-10 pl-8 pr-16">
            <h2 className="text-2xl">Кабинет</h2>

            <div className="mt-12 flex gap-4" style={{ height: "calc(100vh - 160px)" }}>
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