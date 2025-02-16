import React from "react"

export const AdminNavigation = ({content, setContent}) => {
    console.log(content);
    return (
        <div className="flex gap-4">
            <button onClick={() => content !== "withdraw" ? setContent("withdraw") : ""} className={`cursor-pointer rounded-md py-1.5 px-3 font-bold text-lg  ${content === "withdraw" ? "bg-green" : "bg-slate-200"}`}>Выводы</button>
            <button onClick={() => content !== "search" ? setContent("search") : ""} className={`cursor-pointer rounded-md py-1.5 px-3 font-bold text-lg ${content === "search" ? "bg-green" : "bg-slate-200"}`}>Пользователи</button>
        </div>
    )
}