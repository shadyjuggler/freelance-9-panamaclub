import React from "react"

export const Card = ({ children, isFullHeigh }) => {
    return (
        <div className={`bg-white py-4 px-4 rounded-xl shadow-sm h-full overflow-hidden ${isFullHeigh ? "h-full" : ""}`}>
           {...children}
        </div>
    )
}