

import ViewProducts from "../../Components/AdminComponents/ViewProducts/ViewProducts";

// export const getServerSideProps = async (context) => {

//     try{

//         const {query} = context;

//         const data = await sendGetRequest({endpoint:'getProductsData', queryParams:{ page: query.page} });
    
//         if(data.status == "success"){
    
//             return { props: { data } }
//         }
//         else{
    
//             return { props: {data:{status:'failed',message:'could not get inital data from the server', error:{}, payload:{data:[],count:0}}} }
//         }     
        
//     }
//     catch(error){
//         return { props: {data:{status:'failed',message:'could not get inital data from the server',error: {}, payload:{data:[],count:0}}} }
//     }
    
// }

// function sendGetRequest({ endpoint, queryParams = {} } = {}) {

//     let request;
//     let REQUEST_OPTIONS;
//     let END_POINT;
//     let BASE_URL = 'http://192.168.20.2:5000/';

//     if (!endpoint) {
//         return Promise.reject("the endpoint parameter is required");
//     }

//     const QUERY_STRING = new URLSearchParams(queryParams).toString();
//     END_POINT = BASE_URL + endpoint + (QUERY_STRING ? `?${QUERY_STRING}` : '');
    
//     REQUEST_OPTIONS = {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//     };
    
//     request = new Request(END_POINT, REQUEST_OPTIONS);
    
//     return fetch(request)
//     .then((response) => response.json());

// }
   
export default function viewProducts({ data = {status:'failed',message:'could not get inital data from the server', error:{}, payload:{data:[],count:0}} }) {


    return(
        <ViewProducts data={data} />
    )
}

