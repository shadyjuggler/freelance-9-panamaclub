import React from "react";
import { useState } from "react";

//@ts-ignore
import LogoSvg from "../assets/logo.svg";
//@ts-ignore
import ExitSvg from "../assets/exit.svg";
//@ts-ignore
import CabinetSvg from "../assets/cabinet.svg";
//@ts-ignore
import AddUserSvg from "../assets/add_user.svg";
//@ts-ignore
import SettingsSvg from "../assets/settings.svg";
//@ts-ignore
import SocialsSvg from "../assets/socials.svg";

const tabs = [
    {
        img:   CabinetSvg,
        name: 'Кабинет'
    },
    {
        img:   AddUserSvg,
        name: 'Зарегистрировать <br/> пользователя'
    },
    {
        img:   SettingsSvg,
        name: 'Настройки'
    },
    {
        img:   SocialsSvg,
        name: 'Поддержка'
    },
];

export const Navigation = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col bg-white py-8 pl-16 pr-8 w-full max-w-xs">
            <div>
                <img src={LogoSvg} alt="logo" />
            </div>
            <div className="mt-8 flex gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-300"></div>
                <div>
                    <p className="font-bold text-slate-900">Анатолий Бачинский</p>
                    <p className="text-sm font-semibold text-gray-500">aderoll322</p>
                </div>
            </div>

            <div className="mt-8 flex flex-col pl-4 border-b-1 border-slate-100 pb-4">
                {
                    Array(4).fill('_').map((_, i) => {
                        return (
                            <button onClick={() => setActiveTab(i)} className={`nav-tab ${activeTab === i && 'nav-tab_active'}`}>
                                <img src={tabs[i].img} alt="cabinet" />
                                <p className="py-0 w-full text-left font-semibold text-slate-900" dangerouslySetInnerHTML={{__html: tabs[i].name}}></p>
                            </button>
                        )
                    })
                }
            </div>

            <div className="mt-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Баланс</p>
                    <span className="label">1253</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold" style={{ lineHeight: "18px" }}>Реферальный <br /> баланс</p>
                    <span className="label">1253</span>
                </div>
            </div>

            <div className="mt-auto flex gap-4 items-center">
                <img src={ExitSvg} alt="exit" />
                Выйти
            </div>
        </div>
    )
}