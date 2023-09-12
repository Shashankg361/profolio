import Image from 'next/image';

export default function Skills(){

    return (
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
    )
    
}