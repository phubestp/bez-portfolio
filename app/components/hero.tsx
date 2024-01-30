"use client"

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { Tooltip } from 'flowbite-react';
import { Lexend_Exa } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

const lexend = Lexend_Exa({
    subsets: ['latin'],
    weight: '700'
})

const fadeIn = {
  initial: {
    opacity: 0,
    y: -25,  
  },
  animate: {
    opacity: 1,
    y: 0,  
  },
  transition: {
    delay: 0.6,
    duration: 0.75,
    ease: 'easeOut',
  }
}

export default function Hero() {
    
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 150], [1, 0])

    return (
        <div className="flex flex-col justify-between items-center w-full m-16 md:py-64 py-24 bg-[url('https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] border border-white">
            <motion.div {...fadeIn} style={{ opacity }}>
                <p className="text-center text-xl py-4 italic">Hello. I'm</p>
            </motion.div>
            <motion.div {...fadeIn} style={{ opacity }}>
                <h1 className={`text-center lg:text-7xl text-5xl font-bold ${lexend.className}`}>Phubest Panthong</h1>
            </motion.div>
            <div className="flex gap-10 my-10">
                <Tooltip content="Github" style="dark">
                    <Link href="https://github.com/phubestp"><FaGithub size={32} /></Link>
                </Tooltip>
                <Tooltip content="LinkedIn" style="dark">
                    <Link href="http://www.linkedin.com/in/phubest-panthong-182537205"><FaLinkedin size={32} /></Link>
                </Tooltip>
                <Tooltip content="My Resume" style="dark">
                    <Link href="/"><IoIosDocument size={32} /></Link>
                </Tooltip>
            </div>
            <Link href="#About" scroll={true} className="animate-bounce"><MdKeyboardArrowDown size={48} /></Link>
        </div>
    )
}