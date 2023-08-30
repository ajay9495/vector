import { useState, useEffect } from "react";


export default function FloatingHeaderLogic(){


    const [HeaderStateActive, setHeaderStateActive] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);


    useEffect(() => {


        const handleScroll = () => {

            console.log("hello scroll function");

          const currentScrollY = window.scrollY;
    
          if (currentScrollY > prevScrollY) {

            console.log("hello scroll down");

            // setScrollDirection('down');
          } else if (currentScrollY < prevScrollY) {

            console.log("hello scroll up");

            // setScrollDirection('up');
          }
    
          setPrevScrollY(currentScrollY);
        };


    
        window.addEventListener('scroll', ()=>{

            console.log("added event listner");
        });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

    }, [prevScrollY]);



    const States = {
        HeaderStateActive
    }
   
    return {States}


}













