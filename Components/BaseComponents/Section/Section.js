 
export default function Section({localStyles, globalStyles, id, children, onClick}) {


    function getClassName(localStyles,globalStyles){

        if((globalStyles != undefined)&&(localStyles != undefined)){

            return globalStyles+" "+localStyles+" "+'section-base';

        }else if(globalStyles != undefined){

            return globalStyles+" "+'section-base';
        }
        else if(localStyles != undefined){
            return localStyles+" "+'section-base';
        }
        else{
            return 'section-base'
        }

    }

    return (

      <div id={id}  className={getClassName(localStyles,globalStyles)}  onClick={onClick} >

        {children}

      </div>

    )
  }