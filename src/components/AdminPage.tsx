import React from "react"

export const AdminPage = ({ children}) => {
    return (
        <div className="w-full flex h-full px-6 py-8 mx-auto flex-col bg-slate-50" style={{ maxWidth: "1250px" }}>
           {...children}
        </div>
    )
}