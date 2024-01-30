import { Lexend_Exa } from "next/font/google";

const lexend = Lexend_Exa({
    subsets: ['latin'],
    weight: '300'
})

export default function Footer() {
    return (
        <div className={`w-full text-center ${lexend.className}`}>
            Bez
        </div>
    )   
}