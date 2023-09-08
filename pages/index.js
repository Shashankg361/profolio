

export default function Home() {
  return (
    <main
      className={` min-h-screen flex-col items-center justify-between `}
    >
      <div className='flex bg-white text-slate-800 items-center' style={{justifyContent:"space-between"}}>
        <div >LOGO</div>
        <div>
          <ul style={{display:"flex" , justifyContent:"space-between"}}>
            <li className='p-2'>profile</li>
            <li className='p-2'>projects</li>
            <li className='p-2'>contact</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col p-2 pt-0 items-center profileContainer'>
        <h1 className='font-extrabold text-2xl m-2 '>Shashank Gupta</h1>
        <div className='w-2/3 m-2 h-96 p-7 bg-stone-950 profileCard'>
           <div className="profilePhoto">
            profile photo
           </div>
           <div className="profileName">
            <h1> Hello! I'm , </h1>
            <h1>Shashank</h1>
           <div className="profileDescription">description</div>
           </div>

        </div>
      </div>
      <div className="projectContainer m-14">
        <ul>
          <li>
            <div className="card"><h2>PlaceHolder1</h2></div>
          </li>
          <li>
            <div className="card"><h2>PlaceHolder2</h2></div>
          </li>
          <li>
            <div className="card"><h2>PlaceHolder3</h2></div>
          </li>
          <li>
            <div className="card"><h2>PlaceHolder4</h2></div>
          </li>
          <li>
            <div className="card"><h2>PlaceHolder5</h2></div>
          </li>
          <li>
            <div className="card"><h2>PlaceHolder6</h2></div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="AboutMe flex m-10 p-7 ">
          <div><text> About Me ! </text></div>
          <div className="w-96">
            <p>
              Hello! I'm shashank gupta a computer engineer student , pursuing this degree from <a>K.C. college of engineering</a> affiliated by  
              <a> Mumbai university</a> currently I am in final year of my degree . Aspiring developer who works on self project and learn the 
              about technologies from the internet 
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col items-center text-black">
        <div className="">
          <div className="text-black text-center text-2xl"><h1>Languages</h1></div>
          <div className="Languages">
            <div className="flex items-center p-5"><img src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="Javascript Icon" width="120px" height="120px"></img><span><h1>Javascript</h1></span></div>
            <div className="flex items-center p-5"><img src="https://www.pngall.com/wp-content/uploads/2016/05/Java-Free-Download-PNG.png" alt="Java Icon" width="100px" height="100px" className="p-3"></img><span className="p-2"><h1>Java</h1></span></div>
            <div className="flex items-center p-5"><img src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png" alt="C++ Icon" width="100px" height="100px" className="p-3"></img><span className="p-2"><h1>C++</h1></span></div>
            <div className="flex items-center p-5"><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Html Icon" width="100px" height="100px" className="p-3"></img><span className="p-2"><h1>HTML</h1></span></div>
            <div className="flex items-center p-5"><img src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png" alt="Css Icon" width="90px" height="90px" className="p-3"></img><span className="p-2"><h1>CSS</h1></span></div>
          </div>
          
          
        </div>
          
          <div>
            <div className="grid-rows-1 text-black"><h1>Frameworks and Technologies</h1></div>
            <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react Icon" width="100px" height="100px"></img>
            <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png" alt="react Icon" width="100px" height="100px"></img>
            <img src="https://p7.hiclipart.com/preview/747/798/387/mysql-database-web-development-computer-software-dolphin.jpg" alt="MySql Icon" width="100px" height="100px"></img>
          </div>
          
      </div>
      
      
    </main>
  )
}
