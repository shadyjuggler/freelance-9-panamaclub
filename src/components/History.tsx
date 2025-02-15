import React from "react"
import { Card } from "./Card"

export const History = ({ data }) => {
    return (
        <Card isFullHeigh={true}>
            <div className="flex px-2 pb-2 justify-between border-b-1 border-slate-100">
                <p className="xl text-lg font-bold">Дата</p>
                <p className="xl text-lg font-bold">Реферальные начисления</p>
            </div>

            <div className="mt-4 h-full flex px-3 pb-15 flex-col gap-3 overflow-y-scroll scrollable">
                {
                    data.map((type: string, i: number) => (
                        <div key={i} className={`py-3 px-2 flex items-center rounded-lg ${type}`}>
                            <p className="w-1/2 font-semibold">11 янв 2025</p>
                            <p className="w-1/2 text-xl font-bold !border-0" id="amount">{type === "plus" ? "+500" : "-200"}</p>
                        </div>
                    )
                    )
                }
            </div>
        </Card>

    )
}