import SharedConfig from "./SharedConfig";


let {config} = SharedConfig();

let request;
const QUERY_STRING = "";
let REQUEST_OPTIONS;
let END_POINT;
let BASE_URL = config.CURRENT_BASE_URL;
let REQUEST_BODY = {};

function sendPostRequest({endpoint,body}){


    END_POINT = BASE_URL+endpoint;

    if(body !== null){

        REQUEST_BODY = JSON.stringify(body);
    }
    else{
        REQUEST_BODY  = null;
    }


    REQUEST_OPTIONS = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: (body !== null ? JSON.stringify(body) : null)
    };

    request = new Request(END_POINT,REQUEST_OPTIONS);

    return fetch(request)
    .then((response) => response.json());

}

function sendFormData({endpoint,data}){

    END_POINT = BASE_URL+endpoint;

    const request = new Request(END_POINT, {
        method: 'POST',
        body: data,
    });
    
    return fetch(request)
    .then((response) => response.json())

}

function sendGetRequest({ endpoint, queryParams = {} } = {}) {

    if (!endpoint) {
        return Promise.reject("the endpoint parameter is required");
    }

    const QUERY_STRING = new URLSearchParams(queryParams).toString();
    END_POINT = BASE_URL + endpoint + (QUERY_STRING ? `?${QUERY_STRING}` : '');
    
    REQUEST_OPTIONS = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    };
    
    request = new Request(END_POINT, REQUEST_OPTIONS);
    
    return fetch(request)
    .then((response) => response.json());

}

function processApiError(error){
    
    console.log("Could not connect to the server");
    console.log(error);
}

function testFunction(){
    console.log("hello test function from api module");
}

const api = {
    testFunction,
    sendPostRequest,
    sendGetRequest,
    sendFormData,
    processApiError,
}

export default api;











