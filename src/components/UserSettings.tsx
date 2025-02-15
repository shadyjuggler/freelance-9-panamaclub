import React from "react"
import { Card } from "./Card"
import { UserTab } from "./UserTab"

export const UserSettings = () => {
    return (
        <UserTab>
            <h2 className="text-2xl">Настройки</h2>
            <div className="mt-8">
                <Card isFullHeigh={false}>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <p className="font-bold field green-border">Referrer</p>
                            </div>
                            <div className="w-2/3">
                                <p className="font-semibold field green">Антон Назаров</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <p className="font-bold field green-border">Name Surname</p>
                            </div>
                            <div className="w-2/3">
                                <p className="font-semibold field green">Name Surname</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <p className="font-bold field green-border">Email</p>
                            </div>
                            <div className="w-2/3">
                                <p className="font-semibold field green">ibragim.asm@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <p className="font-bold field green-border">Login</p>
                            </div>
                            <div className="w-2/3">
                                <p className="font-semibold field green">ibragim228</p>
                            </div>
                        </div>

                    </div>
                    <span></span>
                </Card>
            </div>
            <div className="mt-8 flex gap-4">
                <div className="w-1/3">
                    <p className="font-bold field green-border">Кошелек для вывода</p>
                </div>
                <div className="w-2/3">
                    <p className="font-semibold field green">0х5689dj9796nf978689595</p>
                </div>
            </div>
            <div className="mt-8">
                <Card isFullHeigh={false}>
                    <p className="font-bold">Сменить кошелек для вывода</p>
                    <form className="flex gap-6 mt-4">
                        <div className="basis-1/4">
                            <p className="field green-border">
                                TRC20 USDT
                            </p>
                        </div>
                        <div className="basis-3/4">
                            <input className="field green-border w-full !text-left px-6 focus:border-2 focus:!border-green-600 focus:outline-0" placeholder="Введите кошелек"/>
                        </div>
                        <div className="basis-1/4">
                            <button className="btn-primary w-full !py-2">Сменить</button>
                        </div>
                    </form>
                </Card>
            </div>
        </UserTab>

    )
}