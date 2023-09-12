import React ,{ useRef , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function Navbar(){

    const navRef = useRef(null);

    const showNav = ()=>{
        console.log(navRef);
        if(navRef.current)
        {
            navRef.current.classList.toggle("responsive-nav");
        }
            
        
    }

    return (
        <header>
        <div className='flex bg-white text-slate-800 items-center justify-between' >
          <div >LOGO</div>
          <div >
            <nav ref={navRef} className="flex items-center ">
                <ul>
                <li className='p-2' onClick={showNav}>profile</li>
                <li className='p-2' onClick={showNav}>projects</li>
                <li className='p-2' onClick={showNav}>contact</li>
                <li>
                    <div>
                        <button className="nav-btn nav-close-btn" onClick={showNav}>  
                        <FontAwesomeIcon icon={faXmarkCircle} style={{color: "#a4d1e5", width:"25px" ,height:"25px"}} />
                        </button>
                    </div>
                </li>
                </ul>
            </nav>
            <div className="nav-btn">
                    <button onClick={showNav}>
                        <Image src="/bars-solid.svg" width={25} height={25} alt="navrBar-btn"/>
                    </button>
                </div>

          </div>

          

        </div>
        </header>
    )
}