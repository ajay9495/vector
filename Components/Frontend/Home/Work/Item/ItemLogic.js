

export default function ItemLogic(Events, data){

    function expandItem(){

        Events.setServiceExpandState((prevState)=>{
            return(
                {...prevState, isVisible: true, data: data}
            )
        })
    }

    
    const ItemEvents ={
        expandItem
    }
    
    return {ItemEvents}


}


