
export default function Row({localStyles, globalStyles, id, children, onClick}) {

    function getClassName(localStyles,globalStyles){

        if((globalStyles != undefined)&&(localStyles != undefined)){

            return globalStyles+" "+localStyles+" "+'row-base';

        }else if(globalStyles != undefined){

            return globalStyles+" "+'row-base';
        }
        else if(localStyles != undefined){
            return localStyles+" "+'row-base';
        }
        else{
            return 'row-base'
        }

    }

    return (

      <div   id={id}  className={getClassName(localStyles,globalStyles)}  onClick={onClick}  >

        {children}

      </div>

    )

}

