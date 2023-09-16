import Image from "next/image";


export default function Profile(){

    return(
        <div className='flex flex-col p-2 pt-0 items-center profileContainer'>
          <h1 className='text-2xl m-2 text-gray-100'>Welcome!!</h1>
          <div className='w-2/3 m-2 h-fit p-7 bg-stone-950 profileCard'>
            <div className="profilePhoto">
              <Image src="/profileimage2.png" width={200} height={200}/>
            </div>
            <div className="profileName">
              <h1>{` Hello! I'm , `}</h1>
              <h1>Shashank</h1>
            </div>
            <div className="profileDescription"><p>"As an enthusiastic and passionate software engineer, I turn ideas into reality with the power of code. Whether it's crafting web solutions or building mobile applications, I thrive on the thrill of problem-solving and the satisfaction of achieving desired outcomes. With experience as a full-stack web developer, I'm well-equipped to bring your projects to life. Beyond my technical skills, I have a strong interest in blockchain technology, exploring its potential to shape the future. Let's collaborate and turn your vision into a digital masterpiece." </p></div>
          </div>
        </div>
    )
}