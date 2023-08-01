import { useEffect, useState } from "react"

import portfolio1 from '../../../Assets/Images/portfolio1.webp'
import portfolio2 from '../../../Assets/Images/portfolio2.webp'
import portfolio3 from '../../../Assets/Images/portfolio3.webp'
import portfolio4 from '../../../Assets/Images/portfolio4.webp'
import portfolio5 from '../../../Assets/Images/portfolio5.webp'
import portfolio6 from '../../../Assets/Images/portfolio6.webp'

export default function TestLogic(){

    const INITIAL_VALUE = [
        {id:0,testKey:'value one', filter: 'filterOne', image: portfolio1},
        {id:1,testKey:'value two', filter: 'filterOne', image: portfolio2},
        {id:2,testKey:'value three', filter: 'filterOne', image: portfolio3},
        {id:3,testKey:'value four', filter: 'filterOne', image: portfolio4},
        {id:4,testKey:'value four', filter: 'filterTwo', image: portfolio5},
        {id:5,testKey:'value four', filter: 'filterTwo', image: portfolio6},
        {id:6,testKey:'value one', filter: 'filterTwo', image: portfolio1},
        {id:7,testKey:'value two', filter: 'filterTwo', image: portfolio2},
        {id:8,testKey:'value three', filter: 'filterThree', image: portfolio3},
        {id:9,testKey:'value four', filter: 'filterThree', image: portfolio4},
        {id:10,testKey:'value four', filter: 'filterThree', image: portfolio5},
        {id:11,testKey:'value four', filter: 'filterThree', image: portfolio6},
        {id:12,testKey:'value one', filter: 'filterFour', image: portfolio1},
        {id:13,testKey:'value two', filter: 'filterFour', image: portfolio2},
        {id:14,testKey:'value three', filter: 'filterFour', image: portfolio3},
        {id:15,testKey:'value four', filter: 'filterFour', image: portfolio4},
        {id:16,testKey:'value four', filter: 'filterFour', image: portfolio5},
        {id:17,testKey:'value four', filter: 'filterFour', image: portfolio6}
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }
      
    // // Usage
    // shuffleArray(INITIAL_VALUE);
    // console.log(INITIAL_VALUE);

    const [Data, setData] = useState(INITIAL_VALUE.slice(0, 8));

    
    function filterItems(filter){

        setData((prevState)=>{

            return INITIAL_VALUE.filter((item)=>{
                return (item.filter == filter);
            }).map((item,index)=>{

                return({...item,id:item.id+100});
            });
            
        });

    }

    function getAllItems(){

        setData((prevState)=>{

            return INITIAL_VALUE.map((item,index)=>{
                return({...item,id:item.id+1000});
            }).slice(0,8);
            
        });

    }

    const Events = {
        filterItems, getAllItems
    }

    return {Data, Events}


}


