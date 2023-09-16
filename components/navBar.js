import React ,{ useRef , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { faDollar, faS } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    const navRef = useRef(null);

    const showNav = ()=>{
        console.log(navRef);
        if(navRef.current)
        {
            navRef.current.classList.toggle("responsive-nav");
        }
    }

    const scrollTo = (className)=>{
        const element = document.querySelector(className);

        element.scrollIntoView();
    }

    return (
        <header>
        <div className='flex bg-white text-slate-800 items-center justify-between' >
          <div><FontAwesomeIcon icon={faDollar} style={{color: "black", width:"34px" ,height:"34px"}}/></div>
          <div >
            <nav ref={navRef} >
                <ul className="flex items-center ">
                <li className='p-2' onClick={()=>{showNav() ; scrollTo(".profileContainer")}}>Profile</li>
                <li className='p-2' onClick={()=>{showNav() ; scrollTo(".Project")}}>Projects</li>
                <li className='p-2' onClick={()=>{showNav() ; scrollTo(".About")}}>AboutMe</li>
                <li className='p-2' onClick={()=>{showNav() ; scrollTo(".Skills")}}>Skills</li>
                <li className='p-2' onClick={()=>{showNav() ; scrollTo(".Contact")}}>Contact</li>
                <li>
                    <div>
                        <button className="nav-btn nav-close-btn" onClick={showNav}>  
                        <FontAwesomeIcon icon={faXmarkCircle} style={{color: "aliceblue", width:"25px" ,height:"25px"}} />
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