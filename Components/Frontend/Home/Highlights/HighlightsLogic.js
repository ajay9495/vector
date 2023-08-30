import { useEffect, useState } from "react"


export default function HighlightsLogic(){


    const [Highlights1State, setHighlights1State]  = useState(false);
    const [Highlights2State, setHighlights2State]  = useState(false);
    const [Highlights3State, setHighlights3State]  = useState(false);
    const [Highlights4State, setHighlights4State]  = useState(false);

    useEffect(()=>{



        const highlightsWrapper = document.getElementById("highlightsWrapper");

        if(highlightsWrapper){

            const options = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5, // Percentage of the element that should be visible
            };
        
            const observer = new IntersectionObserver(processIntersection, options);
            observer.observe(highlightsWrapper);
    
            return () => {
                observer.unobserve(highlightsWrapper);
            };

        }


    },[]);


    const processIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            setHighlights1State(true);

            
            setTimeout(() => {
                
                setHighlights2State(true);


            }, 300);

            setTimeout(() => {
                
                setHighlights3State(true);

            }, 600);

            setTimeout(() => {
                
                setHighlights4State(true);

            }, 600);


          }
        });
    };

    
    const Data  = {
        Highlights1State, Highlights2State, Highlights3State, Highlights4State
    }

    
    return {Data}


}


