import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? "transition-opacity opacity-100 duration-500 translate-x-0"
                    : "transition-all delay-500 opacity-0 translate-x-full")
            }
        >
            <section
                className={
                    "w-4/5 max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "translate-x-full")
                }
            >

                <article className="relative w-270px max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-4 text-2xl shadow-md font-bold text-center flex items-center justify-between">
                        Garv Travels
                        <XMarkIcon className="block cursor-pointer h-7 w-7" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
