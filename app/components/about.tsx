import Image from 'next/image'
import { useScroll, useTransform, motion } from "framer-motion";

export default function About() {
    
    return (
        <div className="flex flex-col justify-center items-center w-full m-8 flex-1" id="About">
            <p className="text-center text-6xl p-10 font-bold text-black text-stroke">
                About me
            </p>
            <div className='w-2/3 lg:h-72 relative h-36 my-4 grayscale contrast-125	hover:grayscale-0 transition-all duration-150'>
                <Image src="/img/profile.jpg" fill alt="Picture of the author" objectFit='cover'></Image>
            </div>
            <p className="mt-8 text-lg w-2/3">
                I'm <b>Phubest Panthong</b> or <b>Bes</b>. I'm a computer science student at Kasetsart University, and I'm interested in
                software engineering and artificial intelligence.
            </p>
        </div>
    )
}