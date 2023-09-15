import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function AboutMe(){
    return (
        <div className="flex flex-col items-center m-10">
          <div>
            <div className="AboutMe flex p-7 ">
            <div><text> About Me ! </text></div>
            <div className="w-96 aboutpara">
              <p>
                {`Hello! I'm shashank gupta a computer engineer student , pursuing this degree from K.C. college of engineering affiliated by  
                 Mumbai university currently I am in final year of my degree . Aspiring developer who works on self project and learn the 
                about technologies from the internet`} 
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <a href="https://github.com/Shashankg361" target="blank"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800"> <div className="flex items-center justify-center"><span><FontAwesomeIcon icon={faGithub} style={{color: "#a4d1e5", width:"27px" ,height:"27px" ,padding:"5px"}}/></span><span>Github</span></div></button></a>
            <a href="https://drive.google.com/file/d/1zCWB9R2SIO4NnNGWgZsHTDsEJLpR8aDF/view?usp=sharing" target="blank"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800"><div className="flex items-center justify-center"><span><FontAwesomeIcon icon={faFile} style={{color: "#a4d1e5", width:"27px" ,height:"27px" ,padding:"5px"}}/></span><span>Resume</span></div></button></a>
            <a href="https://leetcode.com/Shashank_sk_13/" target="blank"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800"><div className="flex items-center justify-center"><span><Image src={"/leetCode.png"} width={33} height={33} style={{color: "#a4d1e5",  padding:"5px"}}/></span><span>LeetCode</span></div></button></a>
            </div>
          </div>
          
        </div>
    )
}