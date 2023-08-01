
export default function Box({localStyles,globalStyles,id, children, onClick}) {

    function getClassName(localStyles,globalStyles){

        if((globalStyles != undefined)&&(localStyles != undefined)){

            return globalStyles+" "+localStyles;

        }else if(globalStyles != undefined){

            return globalStyles;
        }
        else if(localStyles != undefined){
            return localStyles;
        }
        else{
            return 'no-styles'
        }

    }


  return (

        <div id={id}  className={getClassName(localStyles,globalStyles)}  onClick={onClick} >

            {children}

        </div>

  )
}


