import { useEffect, useRef, useState } from "react"


export default function OfferLogic(){

    useEffect(()=>{

        const offerInnerWrapper = document.getElementById("offerInnerWrapper");
        
        if(offerInnerWrapper){

            const options = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5, // Percentage of the element that should be visible
            };
        
            const observer = new IntersectionObserver(processIntersection, options);
            observer.observe(offerInnerWrapper);
    
            return () => {
                observer.unobserve(offerInnerWrapper);
            };

        }


    },[]);

    const [ImageActive, setImageActive] = useState(false);
    const [TextActive, setTextActive] = useState(false);
    const [RightTextActive, setRightTextActive] = useState(false);

    
    const processIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {


            setImageActive(true)


            setTimeout(()=>{

                setTextActive(true);
            },1000);


          }
        });
    };
    
    
    
    
    const States = {ImageActive, TextActive, RightTextActive}
   
    return {States}


}


