import React from "react"

export const Card = ({ children }) => {
    return (
        <div className="bg-white py-4 px-4 rounded-xl shadow-sm h-full overflow-hidden">
           {...children}
        </div>
    )
}