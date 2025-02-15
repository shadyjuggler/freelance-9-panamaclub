import React from "react"
import { Card } from "./Card"

export const HistoryDetails = ({ data }) => {
    return (
        <Card isFullHeigh={true}>
            <div className="flex px-2 pb-2 justify-center border-b-1 border-slate-100">
                <p className="xl text-lg font-bold">История транзакций</p>
            </div>

            <div className="mt-4 h-full flex px-3 pb-15 flex-col gap-3 overflow-y-scroll scrollable">
                {
                    data.map((type: string, i: number) => (
                        <div key={i} className={` gap-1.5 flex items-center rounded-lg !bg-transparent ${type} `}>
                            <p className="w-1/2 font-semibold px-3 py-2 text-center rounded-md border-1 border-slate-300">Fast change</p>
                            <p className="w-1/2 font-semibold px-3 py-2 text-center rounded-md border-1 border-slate-300">11 янв 2025</p>
                            <p className="w-3/5 px-3 py-2 text-center rounded-md border-1 border-slate-300 text-xl font-bold" id="amount">{type === "plus" ? "+500" : "-200"}</p>
                        </div>
                    )
                    )
                }
            </div>
        </Card>
    )
}