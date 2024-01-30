import Image from 'next/image'
import { Project } from './project'
import projectsData from '../data/projectsData'

export default function Projects() {
    
    return (
        <div className="flex flex-col justify-center items-center w-full m-8 flex-1" id="About">
            <p className="text-center text-6xl p-10 font-bold text-black text-stroke">
                Projects
            </p>
            <div className='grid xl:grid-cols-2 grid-cols-1 w-5/6 md:px-16 gap-10'>
                {projectsData.map(project => <Project 
                    name={project.name} 
                    description={project.description} 
                    projectImgURL={project.projectImgURL} 
                    projectURL={project.projectURL} />)}
            </div>
        </div>
    )
}