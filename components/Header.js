import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Header({pathname}) {
    const [headerClass, setHeaderClass] = useState('bg-base-100 bg-opacity-90');

    useEffect(() => {
        window.addEventListener('scroll', setHeaderBackground);
        return () => {
            window.removeEventListener('scroll', setHeaderBackground);
        };
    }, []);

    const setHeaderBackground = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 30 ? setHeaderClass("bg-opacity-40 backdrop-blur bg-base-100 text-base-content shadow-sm") : setHeaderClass('bg-base-100 bg-opacity-90');
        }
    };

    return (
        <div
            className={` fixed top-0 z-30 flex justify-center items-center w-full transition-all duration-200 ${headerClass}`}>
            <div className="navbar lg:w-10/12  2xl:w-1200px">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/' className={pathname === '/' ? "text-blue-700" : ""}>主页</Link></li>
                            <li><Link href='/music' className={pathname === '/music' ? "text-blue-700" : ""}>音乐</Link>
                            </li>
                            <li><Link href='/photos' className={pathname === '/photos' ? "text-blue-700" : ""}>相册</Link>
                            </li>
                            <li><Link href='/notes' className={pathname === '/notes' ? "text-blue-700" : ""}>笔记</Link>
                            </li>
                            <li><Link href='/observer'
                                      className={pathname === '/observer' ? "text-blue-700" : ""}>让我康康</Link></li>
                        </ul>
                    </div>
                    {/*<a className="btn btn-ghost normal-case text-xl">daisyUI</a>*/}
                    <Image className="hidden lg:flex" alt="logo" height={50} width={50} src='/images/logo.png'/>
                </div>
                <Image className="lg:hidden" alt="logo" height={50} width={50} src='/images/logo.png'/>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/' className={pathname === '/' ? "text-blue-700" : ""}>主页</Link></li>
                        <li><Link href='/music' className={pathname === '/music' ? "text-blue-700" : ""}>音乐</Link></li>
                        <li><Link href='/photos' className={pathname === '/photos' ? "text-blue-700" : ""}>相册</Link>
                        </li>
                        <li><Link href='/notes' className={pathname === '/notes' ? "text-blue-700" : ""}>笔记</Link></li>
                        <li><Link href='/observer'
                                  className={pathname === '/observer' ? "text-blue-700" : ""}>让我康康</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
}
