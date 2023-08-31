import { useEffect, useState } from "react"

import portfolio1 from '../../../Assets/Images/portfolio1.webp'

export default function HomeLogic(){


    const INITIAL_SERVICE_EXPAND_STATE = {
        isVisible: false,
        data: { 
            id:0, 
            title:'initial LOGO ', 
            filter: 'filter One', 
            image: portfolio1
        }
    }

    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [HeaderStateActive, setHeaderStateActive] = useState(false);
    const [ScrollDirection, setScrollDirection] = useState("down");
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [ServiceExpandState, setServiceExpandState] = useState(INITIAL_SERVICE_EXPAND_STATE);


    var currentScrollY;

    function scrollFunction(event){


      currentScrollY = event.currentTarget.scrollTop;

      if(currentScrollY == 0){

        setScrollDirection('down');

      }
      else if(currentScrollY > prevScrollY) {

        if(ScrollDirection != 'down'){

            setScrollDirection('down');
        }

      } 
      else if(currentScrollY < prevScrollY) {

        if(ScrollDirection != 'up'){

            setScrollDirection('up');
        }

      }

      setPrevScrollY(currentScrollY);

    };


    useEffect(()=>{

        // setTimeout(() => {
            
        //     setIsModalVisible(true);

        // }, 1000);

    },[]);

    const Events ={
        setIsModalVisible,
        setServiceExpandState,
        scrollFunction
    }
    
    return {ServiceExpandState, IsModalVisible, ScrollDirection, Events}


}


