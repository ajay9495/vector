import { useRouter } from "next/router"


export default function ModalLogic(){

    const router = useRouter();

    function goTo(){

        router.push('/contact');

    }

    const ModalEvents = {
        goTo
    }

    
    return {ModalEvents}


}


