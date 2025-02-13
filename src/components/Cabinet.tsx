import React from "react"

export const Cabinet = () => {
    return (
        <div className="w-full h-full py-10 pl-8 pr-16">
            <h2 className="text-2xl">Кабинет</h2>

            <div className="mt-12 flex">
                <div className="basis-1/3 bg-white py-6 px-4 rounded-xl shadow-sm">
                    <div className="flex justify-between">
                        <p className="xl font-bold">Дата</p>
                        <p className="xl font-bold">Реферальные начисления</p>
                    </div>

                    <div className="mt-4">
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="basis-2/3">

                </div>
            </div>
        </div>
    )
}