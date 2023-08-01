
export default function Col({localStyles, globalStyles, id, children, onClick}) {


    function getClassName(localStyles,globalStyles){

        if((globalStyles != undefined)&&(localStyles != undefined)){

            return globalStyles+" "+localStyles+" "+'col-base';

        }else if(globalStyles != undefined){

            return globalStyles+" "+'col-base';
        }
        else if(localStyles != undefined){
            return localStyles+" "+'col-base';
        }
        else{
            return 'col-base'
        }

    }

    return (
  
      <div  id={id}  className={getClassName(localStyles,globalStyles)}  onClick={onClick}  >
          {children}
      </div>
  
    )
  }
  
