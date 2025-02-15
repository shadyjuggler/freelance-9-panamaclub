import React from "react";
//@ts-ignore
import SuccessSvg from "../assets/success.svg";

export const Modal = ({ isHidden, toggle }) => {

    return isHidden ?
        (
            <div className="flex absolute top-0 left-0 w-screen h-screen justify-center items-center" style={{background: "rgba(0,0,0,10%)"}}>
                <div className="bg-white rounded-xl max-w-lg w-full py-11 flex flex-col items-center shadow">
                    <img src={SuccessSvg} alt="success_icon" />
                    <p className="mt-4 text-semibold">Заявка на вывод сформирована</p>
                    <button onClick={toggle} className="mt-4 btn-primary !py-1.5 px-8 !rounded-xl !text-xl">ОK</button>
                </div>
            </div>
        )
        :
        <></>
}