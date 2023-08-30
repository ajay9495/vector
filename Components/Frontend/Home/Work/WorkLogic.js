import { useEffect, useState } from "react"

import portfolio1 from '../../../../Assets/Images/portfolio1.webp'
import portfolio2 from '../../../../Assets/Images/portfolio2.webp'
import portfolio3 from '../../../../Assets/Images/portfolio3.webp'
import portfolio4 from '../../../../Assets/Images/portfolio4.webp'
import portfolio5 from '../../../../Assets/Images/portfolio5.webp'
import portfolio6 from '../../../../Assets/Images/portfolio6.webp'

export default function WorkLogic(){

    const INITIAL_VALUE = [
        {id:0, title:'LOGO ONE', filter: 'filterOne', image: portfolio1},
        {id:1, title:'LOGO TWO', filter: 'filterOne', image: portfolio2},
        {id:2, title:'LOGO THREE', filter: 'filterOne', image: portfolio3},
        {id:3, title:'LOGO FOUR', filter: 'filterOne', image: portfolio4},
        {id:4, title:'LOGO FOUR', filter: 'filterTwo', image: portfolio5},
        {id:5, title:'LOGO FOUR', filter: 'filterTwo', image: portfolio6},
        {id:6, title:'LOGO ONE', filter: 'filterTwo', image: portfolio1},
        {id:7, title:'LOGO TWO', filter: 'filterTwo', image: portfolio2},
        {id:8, title:'LOGO THREE', filter: 'filterThree', image: portfolio3},
        {id:9, title:'LOGO FOUR', filter: 'filterThree', image: portfolio4},
        {id:10, title:'LOGO FOUR', filter: 'filterThree', image: portfolio5},
        {id:11, title:'LOGO FOUR', filter: 'filterThree', image: portfolio6},
        {id:12, title:'LOGO ONE', filter: 'filterFour', image: portfolio1},
        {id:13, title:'LOGO TWO', filter: 'filterFour', image: portfolio2},
        {id:14, title:'LOGO THREE', filter: 'filterFour', image: portfolio3},
        {id:15, title:'LOGO FOUR', filter: 'filterFour', image: portfolio4},
        {id:16, title:'LOGO FOUR', filter: 'filterFour', image: portfolio5},
        {id:17, title:'LOGO FOUR', filter: 'filterFour', image: portfolio6}
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

    const workEvents = {
        filterItems, getAllItems
    }

    return {Data, workEvents}


}


