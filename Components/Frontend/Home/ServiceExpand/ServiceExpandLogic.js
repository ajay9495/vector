import { useRouter } from "next/router"


export default function ServiceExpandLogic(){

    const router = useRouter();

    function goTo(){

        router.push('/contact');

    }

    const ServiceExpandEvents = {
        goTo
    }

    
    return {ServiceExpandEvents}


}


