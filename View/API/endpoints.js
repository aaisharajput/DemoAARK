// const verifyToken = async (token) => {
//     try{
//     let response = await axios.post(`http://localhost:4000/verify-token`,{
       
// secret:process.env.VITE_SECRET_KEY,
//         token
//     },console.log(token));
//     return response.data;
//     }catch(error){
//     console.log("error ",error);
//     }
// }
const { VITE_REACT_APP_SERVER_URL } = import.meta.env;
const URL=VITE_REACT_APP_SERVER_URL;

function FetchRequest(payload,link){
    return new Promise(async(resolve,reject)=>{
        try {
            const response = await fetch(URL+link, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
            let result = await response.json();
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    })    
}

function FetchRequestWithFormData(payload,link){
    return new Promise(async(resolve,reject)=>{
        try {
            const response = await fetch(URL+link, {
                method: "post",
                // headers: {
                //     "Content-Type": "multipart/form-data",
                // },
                body: payload,
            })
            let result = await response.json();
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    })    
}

export async function contactUs(data,token){
    const payload={
        userName:data.userName,
        bussinessEmail:data.bussinessEmail,
        organization:data.organization,
        phoneNo:data.phoneNo,
        designation:data.designation,
        message:data.message,
        token:token
    }

    try{
        const result=await FetchRequest(payload,"/User/contactUs")
        return{
            status:result.Status,error:result.Error,message:result.Response
        };
    }catch(error){
        console.log(error);
        return{
            status:400,error:error+"/ Request Failed",message:""
        };
    }
}

export async function applyNow(data){
    try{
        const result=await FetchRequestWithFormData(data,"/User/applyNow")
        return{
            status:result.Status,error:result.Error,message:result.Response
        };
    }catch(error){
        console.log(error);
        return{
            status:400,error:error+"/ Request Failed",message:""
        };
    }
}
