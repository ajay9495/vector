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

    const [ServiceExpandState, setServiceExpandState] = useState(INITIAL_SERVICE_EXPAND_STATE);

    useEffect(()=>{

        // setTimeout(() => {
            
        //     setIsModalVisible(true);

        // }, 1000);

    },[]);

    const Events ={
        setIsModalVisible,
        setServiceExpandState
    }
    
    return {ServiceExpandState, IsModalVisible, Events}


}


