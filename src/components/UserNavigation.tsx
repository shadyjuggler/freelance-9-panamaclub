import React from "react";
import { NavLink } from "react-router";
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

import { UserContent } from "../enums/UserConent";


export const UserNavigation = ({ contentName, toggleContent }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col bg-white py-8 pl-16 pr-8 w-full max-w-xs">
            <div>
                <img src={LogoSvg} alt="logo" />
            </div>
            <div className="mt-8 flex gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-300"></div>
                <div>
                    <p className="font-bold text-slate-900">Анатолий Бачинский</p>
                    <p className="text-sm font-semibold text-gray-500">aderoll322</p>
                </div>
            </div>

            <div className="mt-8 flex flex-col pl-4 gap-1 border-b-1 border-slate-100 pb-4">
                <button onClick={() => toggleContent(UserContent.Cabinet)} className={`nav-tab ${contentName === UserContent.Cabinet ? "nav-tab_active" : ""}`}>
                    <img src={CabinetSvg} alt="cabinet" />
                    <p className="py-0 w-full text-left font-semibold text-slate-900">Кабинет</p>
                </button>
                <button onClick={() => toggleContent(UserContent.UserRegister)} className={`nav-tab ${contentName === UserContent.UserRegister ? "nav-tab_active" : ""}`}>
                    <img src={AddUserSvg} alt="cabinet" />
                    <p className="py-0 w-full text-left font-semibold text-slate-900">Зарегистрировать <br /> пользователя</p>
                </button>
                <button onClick={() => toggleContent(UserContent.Settings)} className={`nav-tab ${contentName === UserContent.Settings ? "nav-tab_active" : ""}`}>
                    <img src={SettingsSvg} alt="cabinet" />
                    <p className="py-0 w-full text-left font-semibold text-slate-900">Настройки</p>
                </button>
                <button className={`nav-tab`}>
                    <img src={SocialsSvg} alt="cabinet" />
                    <p className="py-0 w-full text-left font-semibold text-slate-900">Поддержка</p>
                </button>
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

            <div className="mt-4 flex flex-col gap-2">
                <button onClick={() => toggleContent(UserContent.Deposit)} className="rounded-md font-semibold cursor-pointer py-1.5 w-full bg-green">Ввод</button>
                <button onClick={() => toggleContent(UserContent.WithDraw)} className="rounded-md font-semibold cursor-pointer py-1.5 w-full bg-red">Вывод</button>
            </div>

            <NavLink className="cursor-pointer mt-auto flex gap-4 items-center" to={"/"}>
                <img src={ExitSvg} alt="exit" />
                Выйти
            </NavLink>
        </div >
    )
}