import React from "react"
import { NavLink } from "react-router";

export const Login = () => {
    return (
        <form className="flex flex-col my-auto mx-auto max-w-lg">
            <div>
                <p className="text-2xl text-slate-900 text-center font-bold">
                    Вход в систему
                </p>
                <p className="mt-1 text-slate-900 text-center">Пожалуйста, введите свой email и пароль чтобы продолжить</p>
            </div>
            <div className="flex flex-col mt-8 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="input-email" className="text-slate-900 cursor-pointer">Почта</label>
                    <input className="input" type="text" id="input-email" name="email" placeholder="anton_makar@gmail.com" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label htmlFor="input-password" className="text-slate-900 cursor-pointer">Пароль</label>
                        <p className="text-gray-500 cursor-pointer link">Забыли пароль?</p>
                    </div>
                    <input className="input" type="password" id="input-password" name="password" placeholder="••••••••" />
                </div>
            </div>
                <NavLink className="btn-primary mt-10 mx-8" to="/dashboard" end>
                    Войти
                </NavLink>
        </form>
    )
}