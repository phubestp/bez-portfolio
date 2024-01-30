import Image from 'next/image'
import Link from 'next/link'

type Project = {
  name: string;
  description: string;
  projectImgURL: string;
  projectURL: string;
}

export function Project({ name, description, projectImgURL, projectURL }: Project) {
    return (
        <Link href={projectURL === "" ? "/" : projectURL} className="p-6 group relative h-full overflow-clip">
            <div className='w-full relative mb-4 h-64 bg-black rounded-md'> 
                <div className='absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-250  p-10'>
                    <span className="font-semibold text-2xl text-white bg-left-bottom bg-gradient-to-r from-red-500 to-[#4E4FEB] bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out">{name}</span>
                    <p className='mt-4 text-ellipsis hidden sm:block'>{description}</p>
                </div>
                <Image src={`${projectImgURL}`} className='rounded-md group-hover:opacity-10 transition-all duration-300' fill alt="Picture of the author" objectFit='cover'></Image> 
            </div>
        </Link>
    )
}