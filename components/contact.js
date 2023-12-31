import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faXTwitter , faGoogle , faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactMe(){
    return(
        <div className="flex items-center justify-between px-10 py-5 bg-gray-800 footer Contact">
              <div className="copyRight">
                <div>
                  <FontAwesomeIcon icon={faCopyright} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}} />
                </div>
                <div><h1 className="text-gray-100"> 2023 Shashank gupta </h1></div>
              </div>
              <div className="contactLinks">
                <div>
                  <a href="https://www.linkedin.com/in/shashankg13" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/Shashank_sk_13" target="blank">
                  <FontAwesomeIcon icon={faXTwitter} style ={{color: "#a4d1e5", width:"27px" ,height:"27px"}} />
                  </a>
                  
                </div>
                <div>
                  <a href="mailto:shashankg361@gmail.com" target="blank">
                    <FontAwesomeIcon icon={faGoogle} style ={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/shashank_sk_13/" target="blank">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#a4d1e5", width:"27px" ,height:"27px"}}/>
                  </a>
                </div>
                <div style={{gridColumn:"1/4"}}>
                  <h1 className="text-white">+91 8169847971</h1>
                </div>
              </div>
              
          </div>
    )
}