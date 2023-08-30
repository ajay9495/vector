import { useState } from "react";
import Validation from "../../SharedModules/Validation";
import api from "../../SharedModules/ApiModule";

export default function AddProductsLogic(){

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


            setRequestStatus("sending");

            const formData =  new FormData();
            formData.append("product_name",ProductData.product_name.value);
            formData.append("category", ProductData.category.value);
            formData.append("image", ProductData.image.value);


            api.sendFormData({endpoint:"postProductData",data: formData})
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

        if(response.status == "success"){

            setRequestStatus("sent");
            openToastState("Successfully saved data in the database.");
            
            setTimeout(()=>{

                closeToast("");
            },3000);

        }
        else if(response.status == "failed"){


            setRequestStatus("sent");
            openToastState(response.message);


            setTimeout(()=>{

                closeToast("");
            },3000);

        }
        else{
            
            setRequestStatus("sent");
            openToastState("Could not post data in the database. There was an error in the server");


            setTimeout(()=>{

                closeToast("");
            },3000);
        }
        
    }



    const Events = {
        changeProductData, submitForm
    }

    
    return {ProductData, Events,ToastState, toggleToastState, RequestStatus, closeToast}


}


