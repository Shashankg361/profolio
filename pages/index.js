  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCopyright } from "@fortawesome/free-regular-svg-icons";
  import { faLinkedin, faTwitter , faGoogle , faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <div>
            <div className="text-black text-center text-2xl"><h1>Languages</h1></div>
            <div className="Languages">
              <div className="flex items-center p-5"><img src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="Javascript Icon" width="85px" height="85px"></img><span><h1>Javascript</h1></span></div>
              <div className="flex items-center p-5"><img src="https://www.pngall.com/wp-content/uploads/2016/05/Java-Free-Download-PNG.png" alt="Java Icon" width="85px" height="85px" className="p-3"></img><span className="p-2"><h1>Java</h1></span></div>
              <div className="flex items-center p-5"><img src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png" alt="C++ Icon" width="85px" height="85px" className="p-3"></img><span className="p-2"><h1>C++</h1></span></div>
              <div className="flex items-center p-5"><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Html Icon" width="85px" height="85px" className="p-3"></img><span className="p-2"><h1>HTML</h1></span></div>
              <div className="flex items-center p-5"><img src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png" alt="Css Icon" width="85px" height="85px" className="p-3"></img><span className="p-2"><h1>CSS</h1></span></div>
            </div>
          </div>
          <div>
            <div className="text-black text-center text-2xl"><h1>Frameworks and Technologies</h1></div>
            <div className="technologies">
                <div className="flex items-center p-5"><img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react Icon" width="60px" height="60px"></img><span className="p-2"><h1>React</h1></span></div>
                <div className="flex items-center p-5"><img src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png" alt="Next.js Icon" width="60px" height="60px"></img><span className="p-2"><h1>Next.js</h1></span></div>
                <div className="flex items-center p-5"><img src="https://p7.hiclipart.com/preview/747/798/387/mysql-database-web-development-computer-software-dolphin.jpg" alt="MySql Icon" width="60px" height="60px"></img><span className="p-2"><h1>MySql</h1></span></div>
                <div className="flex items-center p-5"><img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" alt="Tailwind Icon" width="60px" height="60px"></img><span className="p-2"><h1>Tailwind</h1></span></div>
                <div className="flex items-center p-5"><img src="https://miro.medium.com/v2/resize:fit:304/1*BXaq7UZ-QoMH0vF0Znjy0A.jpeg" alt="Firestore Icon" width="60px" height="v"></img><span className="p-2"><h1>Firestore</h1></span></div>
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
