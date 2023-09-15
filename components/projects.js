import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import Buttons from "./projectLinks";

export default function Projects() {
  const containerRef = useRef(null);
  const cardWidth = 350;
  const autoScrollInterval = 2500;
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.style.scrollBehavior = 'smooth';
    }

    const startAutoScroll = () => {
      const newIntervalId = setInterval(() => {
        if (container) {
          container.scrollLeft += cardWidth;
          if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
            container.scrollLeft = 0;
          }
        }
      }, autoScrollInterval);

      setIntervalId(newIntervalId);
    };

    const stopAutoScrolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    startAutoScroll();

    const card = document.querySelectorAll('.card');

    card.forEach(element => {
      element.addEventListener('mouseenter', () => {
        stopAutoScrolling();
      });

      element.addEventListener('mouseleave', () => {
        startAutoScroll();
      });
    });

    // Clear the interval when the component unmounts
    return () => {
      stopAutoScrolling();
    };
  }, [intervalId]);

    return (
        <div className="projectContainer ml-0 my-14">
          <ul ref={containerRef}>
            <li>
              <div className="card"><h1 className="p-1">Weather site</h1><Image src="/Weather site.JPG" alt="Weather site" width={250} height={150} /><Buttons /></div>
            </li>
            <li>
              <div className="card"><h1 className="py-5">Todo</h1><Image src="/TODO Javascrpt.JPG" alt="Todo" width={250} height={350} /><Buttons /></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Web calculator</h1><Image src="/webCalculator.JPG" alt="Web calculator" width={250} height={200} /><Buttons /></div>
            </li>
            <li>
              <div className="card"><h1 className="p-2">Communtiy landing page</h1><div className="w-70 h-96 bg-black flex items-center"><Image src="/Community.JPG" alt="community page" width={250} height={700} /></div><Buttons /></div>
            </li>
            <li>
            <div className="card"><h1 className="p-2">Proof of presence</h1><div><Image src="/proof-of-presence.jpg" alt="proof of presence" width={185} height={100} /></div><Buttons /></div>
            </li> 
            <li>
            <div className="card"><h1 className="p-2">Web </h1><Image src="/webCalculator.JPG" alt="Web " width={250} height={200} /><Buttons /></div>
            </li>
          </ul>
        </div>
    )
}

