import React from "react"

export const AdminNavigation = () => {
    return (
        <div className="flex gap-4">
            <button className="cursor-pointer rounded-md py-1.5 px-3 font-bold text-lg bg-green">Выводы</button>
            <button className="cursor-pointer rounded-md py-1.5 px-3 text-lg bg-slate-200">Пользователи</button>
        </div>
    )
}