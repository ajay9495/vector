import { useRouter } from "next/router"


export default function HeroMobileLogic(){


    const router = useRouter();

    function goTo(){

        router.push('/contact');
    }
    
    const Events = {
        goTo
    }

    
    return {Events}


}


