import React from "react"

export const UserRegister = () => {
    return (
        <div className="w-full h-full py-10 pl-8 pr-16">
            <h2 className="text-2xl">Кабинет</h2>
            <div className="flex justify-center h-full items-center pb-20">
                <form className="flex flex-col w-full max-w-md">

                    <div className="flex flex-col mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="input-email" className="text-slate-900 cursor-pointer">Логин</label>
                            <input className="input" type="text" id="input-email" name="email" placeholder="esteban_schiller" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="input-email" className="text-slate-900 cursor-pointer">Почта</label>
                            <input className="input" type="email" id="input-email" name="email" placeholder="esteban_schiller@gmail.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="input-email" className="text-slate-900 cursor-pointer">Имя Фамилия</label>
                            <input className="input" type="email" id="input-email" name="email" placeholder="Естебан Шиллер" />
                        </div>

                    </div>
                    <button type="button" className="btn-primary mt-10 mx-8">
                        Зарегистрировать
                    </button>
                </form>
            </div>
        </div>

    )
}