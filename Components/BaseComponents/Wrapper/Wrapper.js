 
export default function Wrapper({localStyles, globalStyles, id, children, onClick}) {


    function getClassName(localStyles,globalStyles){

        if((globalStyles != undefined)&&(localStyles != undefined)){

            return globalStyles+" "+localStyles+" "+'wrapper-base';

        }else if(globalStyles != undefined){

            return globalStyles+" "+'wrapper-base';
        }
        else if(localStyles != undefined){
            return localStyles+" "+'wrapper-base';
        }
        else{
            return 'wrapper-base';
        }

    }


    return (
  
      <div id={id}  className={getClassName(localStyles,globalStyles)}  onClick={onClick} >

          {children}
          
      </div>
  
    )
}