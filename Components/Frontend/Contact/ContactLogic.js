import emailjs from '@emailjs/browser';
import { useState } from 'react';
import api from "../../SharedModules/ApiModule";

export default function ContactLogic(){


    const INITIAL_FORM_STATE = {
        name: {value: '', error: ''},
        email: {value: '', error: '' },
        description: {value: '', error: ''},
        image: {value: '', error: ''},
    }

    const [FormState, setFormState] = useState(INITIAL_FORM_STATE);

    const [IsMessageSent, setIsMessageSent] = useState("initial");
      

    function submitForm(e){


        e.preventDefault();

        if(isInputsValid()){

            setIsMessageSent("sending");

            const formData =  new FormData();
            formData.append("name",FormState.name.value);
            formData.append("email", FormState.email.value);
            formData.append("description", FormState.description.value);
            formData.append("image", FormState.image.value);

            
            api.sendFormData({endpoint:"postEnquiry",data: formData})
            .then((response)=>{

                processSubmitFormResponse(response);
            })
            .catch((error)=>{

                setIsMessageSent("initial");
                api.processApiError(error);
            });

        }
        else{

            console.log("the input fields are not valid");
        }

    }

    
    
    function processSubmitFormResponse(response){

        if(response){

            if(response.status == "success"){

                setIsMessageSent("sent");
                console.log("successfully got message");
            }
            else{

                setIsMessageSent("initial");
                alert("Could not sent message, due to an error in the server. Please try again later");
            }

        }
        else{
            setIsMessageSent("initial");
            alert("Could not sent message, due to an error in the server. Please try again later");
        }



    }


    var inputValidity;
    function isInputsValid(){

        inputValidity = true;

        if(!FormState.name.value){

            setFormState((prevState)=>{

                return({
                    ...prevState, name:{ value:"", error: "This filed is required"}
                })
            })

            inputValidity = false;
        }

        if(!FormState.email.value){

            setFormState((prevState)=>{

                return({
                    ...prevState, email:{ value:"", error: "This filed is required"}
                })
            });

            inputValidity = false;
        }

        if(!FormState.description.value){

            setFormState((prevState)=>{

                return({
                    ...prevState, description:{ value:"", error: "This filed is required"}
                })
            });

            inputValidity = false;
        }

        if(!FormState.image.value){

            setFormState((prevState)=>{

                return({
                    ...prevState, image:{ value:"", error: "This filed is required"}
                })
            });

            inputValidity = false;
        }

        return inputValidity;

    }


    function changeFormState(event){

        event.preventDefault();

        if(event.target.name == "image"){

            setFormState((prevData) => {

                return(
                    { ...prevData, [event.target.name]: {value: event.target.files[0], error:""} }
                )
            });
        }
        else{

            setFormState((prevData) => {

                return(
                    { ...prevData, [event.target.name]: {value: event.target.value, error:""} }
                )
            });
        }


    };


    function reloadPage(){
        window.location.reload();
    }

    const Events ={
        changeFormState, submitForm, reloadPage
    }

    const States = {
        FormState
    }
    
    return {Events, States, IsMessageSent}


}


