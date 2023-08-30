import { useEffect, useState } from "react"

export default function ServicesLogic(){


    const [ItemOneState, setItemOneState] = useState(false);
    const [ItemTwoState, setItemTwoState] = useState(false);
    const [ItemThreeState, setItemThreeState] = useState(false);


    useEffect(()=>{

        const servicesWrapper = document.getElementById("servicesWrapper");

        if(servicesWrapper){

            const options = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5, // Percentage of the element that should be visible
            };
        
            const observer = new IntersectionObserver(processIntersection, options);
            observer.observe(servicesWrapper);
    
            return () => {
                observer.unobserve(servicesWrapper);
            };

        }

    },[]);


    const processIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            setItemOneState(true);
            
            setTimeout(() => {
                
                setItemTwoState(true);

            }, 300);

            setTimeout(() => {
                
                setItemThreeState(true);

            }, 600);


          }
        });
    };

    const States ={
        ItemOneState, ItemTwoState, ItemThreeState
    }
    
    return {States}


}


