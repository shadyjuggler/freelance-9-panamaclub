import React from "react"
import { UserTab } from "./UserTab"
import { useState } from "react";

import { Modal } from "./Modal";


export const Withdraw = () => {
    const [isHidden, setIsHidden] = useState(true);

    const setVisible = () => {
        setIsHidden(!isHidden);
    }

    return (
        <UserTab>
            <h2 className="text-2xl">Вывод</h2>
            <div className="flex justify-center h-full items-center pb-20">
                <form className="flex flex-col w-full max-w-2xl gap-6">
                    <div className="flex gap-8">
                        <div className="w-3/5 py-4 text-center rounded-md border-1 text-xl border-slate-200">Реферальный баланс</div>
                        <div className="w-2/5 py-4 text-center rounded-md border-1 text-xl border-slate-200">500</div>
                    </div>
                    <div className="flex gap-8">
                        <div className="w-3/5 py-4 font-bold text-center rounded-md  text-xl" style={{background: "#CCFFED"}}>Баланс</div>
                        <div className="w-2/5 py-4 font-bold text-center rounded-md border-1 text-xl green-border">500</div>
                    </div>
                    <div className="flex gap-8">
                        <input placeholder="Сумма" className="w-3/5 py-4 text-left px-4 green-border rounded-md border-1 text-xl border-slate-200 focus:!border-green-600 focus:outline-0"/>
                        <button onClick={setVisible} type="button" className="w-2/5 font-bold cursor-pointer py-4 text-center rounded-md text-xl " style={{background: "#FFEBEB"}}>Вывод</button>
                    </div>
                </form>
            </div>
            <Modal isHidden={isHidden} toggle={setVisible}/>
        </UserTab>
    )
}