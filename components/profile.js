import Image from "next/image";


export default function Profile(){

    return(
        <div className='flex flex-col p-2 pt-0 items-center profileContainer'>
          <h1 className='text-2xl m-2 text-gray-100'>Welcome!!</h1>
          <div className='w-2/3 m-2 h-96 p-7 bg-stone-950 profileCard'>
            <div className="profilePhoto">
              <Image src="/profileimage2.png" width={200} height={200}/>
            </div>
            <div className="profileName">
              <h1>{` Hello! I'm , `}</h1>
              <h1>Shashank</h1>
            </div>
            <div className="profileDescription"><p>The sun dipped below the horizon, casting a warm, golden hue across the tranquil lake. Birds chirped softly in the distance, and a gentle breeze rustled through the trees, creating a sense of peace and serenity.</p></div>
          </div>
        </div>
    )
}