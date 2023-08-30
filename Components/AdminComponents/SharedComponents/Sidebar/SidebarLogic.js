import { useRouter } from "next/router";
import { useState } from "react";

export default function SidebarLogic(){

    var INITIAL_STATE;

    const router = useRouter();


    if(router.query.isOpen){

        INITIAL_STATE = {
            isOpen: JSON.parse(router.query.isOpen),
            currentPage: getCurrentPage(router.pathname)
        } 
    }
    else{

        INITIAL_STATE = {
            isOpen: true,
            currentPage: getCurrentPage(router.pathname)
        }    
    }
    
    const [SidebarState, setSidebarState] = useState(INITIAL_STATE);
    


    var pathArray = [];
    function getCurrentPage(pathname){

        pathArray = pathname.split('/');

        return pathArray[2];
    }

    function toggleSidebar(){
        setSidebarState((prevState)=>{
            
            if(prevState.isOpen){
                return ({...prevState, isOpen:false})
            }
            else{
                return ({...prevState, isOpen:true})
            }           
        })
    }

    function goTo(destination){

        if(destination == 'viewProducts'){

            router.push({
                pathname: `/admin/${destination}`,
                query: {...SidebarState, page: 1},
            })
        }
        else{

            router.push({
                pathname: `/admin/${destination}`,
                query: SidebarState,
            })
        }


    }


    const Events = {
        toggleSidebar,goTo
    }
    
    return {SidebarState, Events}


}











