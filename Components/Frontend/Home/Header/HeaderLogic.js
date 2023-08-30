import { useRouter } from "next/router"


export default function HeaderLogic(){

    const router = useRouter();

    function goTo(destination){

        router.push(destination)

    }

    const Events ={
        goTo
    }

    
    return {Events}


}


