import { use, useEffect, useState } from "react"
import { useRouter } from "next/router";
import api from "../../SharedModules/ApiModule";

export default function ViewProductsLogic(data){



    const router = useRouter();

    var CURRENT_PAGE = 1;
    var PAGES_COUNT = 0;
    var ROW_COUNT = 5;


    if(router.query.page){

        CURRENT_PAGE = router.query.page 
    }
    else{

        CURRENT_PAGE = 1;  
    }


    if(data.payload.count % ROW_COUNT !== 0){
        PAGES_COUNT = parseInt(data.payload.count / ROW_COUNT + 1);
    }
    else{
        PAGES_COUNT = parseInt(data.payload.count / ROW_COUNT) ;
    }

    const [ProductData,setProductData] = useState(data.payload);
    const [PagesCount,setPagesCount] = useState(PAGES_COUNT);
    const [CurrentPage, setCurrentPage] = useState(CURRENT_PAGE);


    useEffect(()=>{

        setCurrentPage(router.query.page);

    },[router.query.page])

    useEffect(()=>{


        if(data.status != "success"){

           alert("Could not get any product data from the server.") 
        }

        setPagesCount(PAGES_COUNT)
        setProductData(data.payload);

        
    },[data])



    function goTo(page){
        router.push({
            pathname: '/admin/viewProducts',
            query:{...router.query,page: page}
        })
    }

    function goToNextPage(){

        if(CurrentPage != PagesCount){

            router.push({
                pathname: '/admin/viewProducts',
                query:{...router.query,page: parseInt(CurrentPage) + 1}
            })
        }
    }

    function goToPrevPage(){

        if(CurrentPage != 1){

            router.push({
                pathname: '/admin/viewProducts',
                query:{...router.query,page: parseInt(CurrentPage) - 1}
            })
        }
    }

    function deleteProduct(id){


        var options = {
            endpoint:'deleteProduct',
            body:{
                product_id: id
            }
        } 

        api.sendPostRequest(options)
        .then((response)=>{
            processDeleteRequest(response);
        })
        .catch((error)=>{
            api.processApiError(error);
        });



    }

    function processDeleteRequest(response){

        if(response.status == "success"){
            
            if((ProductData.data.length == 1)&&(CurrentPage != 1)){

                router.push({
                    pathname: 'viewProducts',
                    query:{...router.query,page: parseInt(CurrentPage) - 1}
                })
            }
            else{

                router.push({
                    pathname: 'viewProducts',
                    query:{...router.query,page: CurrentPage}
                })
            }
        }
        else{
            api.processApiError("Could not complete the request,due to an error in the server")
        }

    }

    function goToEditPage(item){

        router.push({
            pathname: 'editProducts',
            query:{...router.query, productId: item.id }
        })
    }



    return {ProductData, PagesCount, CurrentPage, goTo, goToNextPage, goToPrevPage, deleteProduct, goToEditPage}

}


