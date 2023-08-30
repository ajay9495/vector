import { useRouter } from "next/router"
 import { useState,useEffect } from "react";

export default function AgencyLogic(){


    const router = useRouter();

    const [ItemOneState, setItemOneState] = useState(false);
    const [ItemTwoState, setItemTwoState] = useState(false);
    const [ItemThreeState, setItemThreeState] = useState(false);

    useEffect(()=>{

        const agencyWrapper = document.getElementById("agencyWrapper");

        if(agencyWrapper){

            const options = {
                root: null, 
                rootMargin: '0px',
                threshold: 0.5,
            };
        
            const observer = new IntersectionObserver(processIntersection, options);
            observer.observe(agencyWrapper);
    
            return () => {
                observer.unobserve(agencyWrapper);
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


    const Data = {
        ItemOneState, ItemTwoState, ItemThreeState
    }

    function goTo(){
        router.push('/contact');
    }

    const Events ={
        goTo
    }

    
    return {Events, Data}


}


