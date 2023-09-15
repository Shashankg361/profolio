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
            <a href="https://github.com/Shashankg361"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800">Github</button></a>
            <a href="https://drive.google.com/file/d/1zCWB9R2SIO4NnNGWgZsHTDsEJLpR8aDF/view?usp=sharing"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800">Resume</button></a>
            </div>
          </div>
          
        </div>
    )
}