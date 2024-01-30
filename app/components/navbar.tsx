import { FaCat } from "react-icons/fa";
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between w-screen px-16 items-center fixed z-50 backdrop-blur-md py-6">
            <Link href="/">
                <p className="text-2xl font-extrabold text-[#EEEEEE]">Bez<FaCat className="inline mb-2 ml-1"/></p>
            </Link>
        </nav>
    )
}