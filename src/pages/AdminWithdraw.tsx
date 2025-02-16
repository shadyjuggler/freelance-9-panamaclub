import React from "react"

import { Card } from "../components/Card"
import { History } from "../components/History"
import { HistoryDetails } from "../components/HistoryDetails"
import Toggle from 'react-toggle'
import { AdminPage } from "./AdminPage"
import { AdminNavigation } from "../components/AdminNavigation"
import { Table } from "../components/Table"


export const AdminWithdraw = ({transactions}) => {

    return (
        <>
            
            <div className="mt-16">
                <h2 className="text-2xl font-bold">Текущие Выводы</h2>
                <div className={`mt-8 ${transactions.length >= 5 ? "h-96" : ""}`}>
                    <Table transactions={transactions} readonly={false}/>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-2xl font-bold">История выводов</h2>
                <div className={`mt-8 ${transactions.length >= 5 ? "h-96" : ""}`}>
                    <Table transactions={transactions} readonly={true}/>
                </div>
            </div>
        </>
    )
}