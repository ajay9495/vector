import { useState, useEffect } from "react";
import Validation from "../../SharedModules/Validation";
import api from "../../SharedModules/ApiModule";
import { useRouter } from "next/router";

export default function EditProductsLogic(){

    const INITIAL_PRODUCT_STATE = {
        product_name: {value: '', error: ''},
        category:{value: 'initial', error: '' },
        image: {value: '', error: ''}
    }

    const INITIAL_TOAST_STATE = {
        isActive: false,
        message: "initial message"
    }


    const [RequestStatus, setRequestStatus] =  useState("inital");
    const [ProductData, setProductData] = useState(INITIAL_PRODUCT_STATE);
    const [ToastState, setToastState] = useState(INITIAL_TOAST_STATE);
    
   
    
    const toggleToastState = (message) => setToastState((prevState)=>{
        return(
            {...prevState, isActive: !prevState.isActive, message: message}
        )
    });

    const openToastState = (message) => setToastState((prevState)=>{
        return(
            {...prevState, isActive: true, message: message}
        )
    });

    function closeToast(){

        setToastState((prevState)=>{
            return(
                {...prevState, isActive: false}
            )
        })
    }

    var formData;
    const router = useRouter();



    useEffect(()=>{


        if(router.query.productId){

            getProductData(router.query.productId);
        }
        else{
            console.log("hello no query string found");
        }
       

    },[]);


    function changeProductData(event){


        if(event.target.name == "image"){

            setProductData((prevData) => {

                return(
                    { ...prevData, [event.target.name]: {value: event.target.files[0], error:""} }
                )
            });
        }
        else{

            setProductData((prevData) => {

                return(
                    { ...prevData, [event.target.name]: {value: event.target.value, error:""} }
                )
            });
        }



    };

    var inputValidity;
    function isInputsValid(){

        inputValidity = true;

        if(!ProductData.product_name.value){

            setProductData((prevState)=>{

                return({
                    ...prevState, product_name:{ value:"", error: "This filed is required"}
                })
            })

            inputValidity = false;
        }


        if(!ProductData.image.value){

            setProductData((prevState)=>{

                return({
                    ...prevState, image:{ value:"", error: "This filed is required"}
                })
            });

            inputValidity = false;
        }

        if(ProductData.category.value == 'initial'){

            setProductData((prevState)=>{

                return({
                    ...prevState, category:{ value:"", error: "This filed is required"}
                })
            });

            inputValidity = false;
        }

        return inputValidity;

    }


    function submitForm(){

        if(isInputsValid()){

            console.log("hello submitForm");


            setRequestStatus("sending");

            const formData =  new FormData();
            formData.append("product_name",ProductData.product_name.value);
            formData.append("product_category", ProductData.category.value);
            formData.append("image", ProductData.image.value);
            formData.append("product_id", router.query.productId);


            api.sendFormData({endpoint:"updateProductData",data: formData})
            .then((response)=>{

                processApiResponse(response);
            })
            .catch((error)=>{

                api.processApiError(error);
            });

        }
        else{
            openToastState("Could not submit the form. All fields are required");
        }
    }

    function processApiResponse(response){

        console.log("processApiResponse");
        console.log(response);

        // if(response.status == "success"){

        //     setRequestStatus("sent");
        //     openToastState("Successfully saved data in the database.");
            
        //     setTimeout(()=>{

        //         closeToast("");
        //     },3000);

        // }
        // else if(response.status == "failed"){


        //     setRequestStatus("sent");
        //     openToastState(response.message);


        //     setTimeout(()=>{

        //         closeToast("");
        //     },3000);

        // }
        // else{
            
        //     setRequestStatus("sent");
        //     openToastState("Could not post data in the database. There was an error in the server");


        //     setTimeout(()=>{

        //         closeToast("");
        //     },3000);
        // }
        
    }

    function getProductData(id){


        var options = {
            endpoint:'getProductDataById',
            body:{
                product_id: id
            }
        } 

        api.sendPostRequest(options)
        .then((response)=>{
            processProductData(response);
        })
        .catch((error)=>{
            processApiError(error);
        });

    }

    function processProductData(response){

        setProductData((prevState)=>{

            return {
                ...prevState,
                product_name: {value:  response.payload.name, error: ''},
                category:{value:  response.payload.category, error: '' },
                image: {value:  'initial', error: ''}
            }

        });

        document.getElementById("category").value = response.payload.category;


    }

    const Events = {
        changeProductData, submitForm
    }

    
    return {ProductData, Events,ToastState, toggleToastState, RequestStatus, closeToast}


}


