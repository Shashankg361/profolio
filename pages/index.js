  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCopyright } from "@fortawesome/free-regular-svg-icons";
  import { faLinkedin, faTwitter , faGoogle , faInstagram } from "@fortawesome/free-brands-svg-icons";
  import Image from 'next/image';

export default function Home() {
  return (
    <div>

    
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
              <h1> Hello! I;m , </h1>
              <h1>Shashank</h1>
            <div className="profileDescription">description</div>
            </div>

          </div>
        </div>
        <div className="projectContainer m-14">
          <ul>
            <li>
              <div className="card"><h1 className="p-1">Weather site</h1><Image src="/Weather site.JPG" alt="Weather site" width={250} height={150} /></div>
            </li>
            <li>
              <div className="card"><h1 className="py-5">Todo</h1><Image src="/TODO Javascrpt.JPG" alt="Todo" width={250} height={350} /></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /></div>
            </li>
            <li>
              <div className="card"><h1 className="p-2">Communtiy landing page</h1><div className="w-70 h-96 bg-black flex items-center"><Image src="/Community.JPG" alt="community page" width={250} height={700} /></div></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /></div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="AboutMe flex m-10 p-7 ">
            <div><text> About Me ! </text></div>
            <div className="w-96">
              <p>
                Hello! I;m shashank gupta a computer engineer student , pursuing this degree from <a>K.C. college of engineering</a> affiliated by  
                <a> Mumbai university</a> currently I am in final year of my degree . Aspiring developer who works on self project and learn the 
                about technologies from the internet 
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center text-black">
          <div>
            <div className="text-black text-center text-2xl"><h1>Languages</h1></div>
            <div className="Languages">
              <div className="flex items-center p-5"><Image src="/Javascript-Icon.png" alt="Javascript Icon" width={85} height={85} /><span><h1>Javascript</h1></span></div>
              <div className="flex items-center p-5"><Image src="/java-icon.jpg" alt="Java Icon" width={85} height={85} className="p-3" /><span className="p-2"><h1>Java</h1></span></div>
              <div className="flex items-center p-5"><Image src="/C++-icon.png" alt="C++ Icon" width={85} height={85} className="p-3" /><span className="p-2" ><h1>C++</h1></span></div>
              <div className="flex items-center p-5"><Image src="/HTML-icon.png" alt="Html Icon" width={85} height={85} className="p-3" /><span className="p-2" ><h1>HTML</h1></span></div>
              <div className="flex items-center p-5"><Image src="/CSS-icon.png" alt="Css Icon" width={85} height={85} className="p-3" /><span className="p-2"><h1>CSS</h1></span></div>
            </div>
          </div>
          <div>
            <div className="text-black text-center text-2xl"><h1>Frameworks and Technologies</h1></div>
            <div className="technologies">
                <div className="flex items-center p-5"><Image src="/react-icon.png" alt="react Icon" width={60} height={60} /><span className="p-2" ><h1>React</h1></span></div>
                <div className="flex items-center p-5"><Image src="/Next.js-icon.png" alt="Next.js Icon" width={60} height={60} /><span className="p-2"><h1>Next.js</h1></span></div>
                <div className="flex items-center p-5"><Image src="/MySql-icon.png" alt="MySql Icon" width={80} height={80} /><span className="p-2"><h1>MySql</h1></span></div>
                <div className="flex items-center p-5"><Image src="/Tailwind-icon.png" alt="Tailwind Icon" width={60} height={60} /><span className="p-2" ><h1>Tailwind</h1></span></div>
                <div className="flex items-center p-5"><Image src="/firestore-icon.png" alt="Firestore Icon" width={60} height={60} /><span className="p-2"><h1>Firestore</h1></span></div>
            </div>  
          </div>
        </div>

        
      </main>
      <fotter>
          <div className="flex items-center justify-between px-10 py-5 bg-gray-800">
              <div className="copyRight">
                <div>
                  <FontAwesomeIcon icon={faCopyright} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}} />
                </div>
                <div><h1> 2023 Shashank gupta </h1></div>
              </div>
              <div className="contactLinks">
                <div>
                  <a href="www.linkedin.com/in/shashankg13">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/Shashank_sk_13">
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                  
                </div>
                <div>
                  <a href="mailto:shashankg361@gmail.com">
                    <FontAwesomeIcon icon={faGoogle} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/shashank_sk_13/">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
              </div>
              
          </div>
      </fotter>
    </div>
  )
}
