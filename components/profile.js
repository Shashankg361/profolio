export default function Profile(){

    return(
        <div className='flex flex-col p-2 pt-0 items-center profileContainer'>
          <h1 className='font-extrabold text-2xl m-2 '>Shashank Gupta</h1>
          <div className='w-2/3 m-2 h-96 p-7 bg-stone-950 profileCard'>
            <div className="profilePhoto">
              profile photo
            </div>
            <div className="profileName">
              <h1>{` Hello! I'm , `}</h1>
              <h1>Shashank</h1>
            </div>
            <div className="profileDescription">description</div>
          </div>
        </div>
    )
}