import Image from 'next/image';
import React,{ useRef , useEffect , useState} from 'react';
import Buttons from "./projectLinks";

export default function Projects(){

    const containerRef = useRef(null);
    const cardWidth = 350;
    const autoScrollInterval =3000;
    const intervalId =useRef(null) ;

    useEffect(()=>{
      const container = containerRef.current;

      
      if(container){
        container.style.scrollBehavior = 'smooth';
        
      }

      const startAutoScroll =()=>{
        intervalId.current = setInterval(() => {
          if (container) {
            container.scrollLeft += cardWidth; // Adjust the scroll speed as needed
      
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth -1) {
              clearInterval(intervalId.current);
              container.scrollLeft = 0;
              startAutoScroll(); // Restart the scrolling after reaching the end
            }
          }
        }, autoScrollInterval);
      }

      startAutoScroll();

      return ()=>{
        clearInterval(intervalId.current);
      };
    },[]);

    return (
      <div className='Project'>
      <div className='text-center m-5 text-2xl'>
        <h1>Projects</h1>
      </div>
        <div className="projectContainer  ml-0 my-14">
          
          <ul ref={containerRef} className='overflow-x-scroll'>
            <li>
            <div className="card"><h1 className="p-2">Proof of presence</h1><div><Image src="/proof-of-presence.jpg" alt="proof of presence" width={185} height={100} /></div><a href="https://github.com/0xPranavx/proof-of-presence"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800 mt-5">Github</button></a></div>
            </li> 
            <li>
              <div className="card"><h1 className="p-2">Spoty</h1><Image src="/spoty.JPG" alt="Spoty" width={250} height={200} /><Buttons github={"https://github.com/Shashankg361/Spoty"} demo={"https://spoty-13.vercel.app/"}/></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">ChitChat</h1><Image src="/chitchat.png" alt="ChitChat Image" width={250} height={200} /><Buttons github={"https://github.com/Shashankg361/ChitChat"} demo={"https://chitchat-rcqe.onrender.com/"}/></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">BuyNSell</h1><Image src="/BuyNSell.png" alt="BuyNSell" width={250} height={200} /><Buttons github={"https://github.com/Shashankg361/Sell-N-Buy"} demo={"https://shashank-booking-site.vercel.app/"}/></div>
            </li>
            <li>
              <div className="card"><h1 className="p-2">URL_Shortener</h1><Image src="/URL-Shortener.JPG" alt="URL_Shortener" width={250} height={200} /><Buttons github={"https://github.com/Shashankg361/URL-shortener-frontend"} demo={"https://urlshortener13.netlify.app/"}/></div>
            </li>
            <li>
              <div className="card"><h1 className="p-1">Weather site</h1><Image src="/Weather site.JPG" alt="Weather site" width={250} height={150} /><Buttons github={"https://github.com/Shashankg361/WeatherApp"} demo={"https://shashankg361.github.io/WeatherApp/"}/></div>
            </li>
            <li>
              <div className="card"><h1 className="py-5">Todo</h1><Image src="/todo.JPG" alt="Todo" width={250} height={350} /><Buttons github={"https://github.com/Shashankg361/nodeTodo"} demo={"https://node-todo-delta.vercel.app/"}/></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /><Buttons github={"https://github.com/Shashankg361/Calculator"} demo={"https://calci13.netlify.app/"}/></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">FantasticQuiz </h1><Image src="/Quiz.JPG" alt="FantasticQuiz " width={250} height={200} /><Buttons demo={"https://shashankg361.github.io/Quiz-site/"} github={"https://github.com/Shashankg361/Quiz-site"}/></div>
            </li>
          </ul>
        </div>
        </div>
    )
}

