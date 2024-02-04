import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandPython } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { Tooltip } from 'flowbite-react';


export default function Skill() {
    return (
        <div className="flex flex-col justify-center items-center w-full m-8 flex-1">
            <p className="text-center text-6xl p-10 font-bold text-black text-stroke">
                Skills
            </p>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">              
                    <Tooltip content="HTML"style="dark">
                        <FaHtml5 size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">              
                    <Tooltip content="CSS"style="dark">
                        <FaCss3Alt size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">          
                    <Tooltip content="Javascript"style="dark">
                        <IoLogoJavascript size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">              
                    <Tooltip content="Python"style="dark">
                        <TbBrandPython size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">            
                    <Tooltip content="Java"style="dark">
                        <FaJava size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">           
                    <Tooltip content="React"style="dark">
                        <FaReact size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">             
                    <Tooltip content="NextJS"style="dark">
                        <TbBrandNextjs size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">             
                    <Tooltip content="Laravel"style="dark">
                        <FaLaravel size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">               
                    <Tooltip content="SpringBoot"style="dark">
                        <SiSpringboot size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">                
                    <Tooltip content="TailwindCSS"style="dark">
                        <SiTailwindcss size={56} />
                    </Tooltip>
                </div>
                <div className="border border-white p-5 rounded-lg bg-black hover:bg-[#4E4FEB] transition-all duration-300 ease-in-out">                
                    <Tooltip content="Github"style="dark">
                        <FaGithub size={56} />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}