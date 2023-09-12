import Image from 'next/image';

export default function Projects(){
    return (
        <div className="projectContainer ml-0 my-14">
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
            <div className="card"><h1 className="p-2">Proof of presence</h1><div><Image src="/proof-of-presence.jpg" alt="proof of presence" width={185} height={100} /></div></div>
            </li> 
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /></div>
            </li>
          </ul>
        </div>
    )
}