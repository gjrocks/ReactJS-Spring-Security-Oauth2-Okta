import axios from 'axios';

export const  getAPIData=async (id)=>{
 
   const data=await axios.get("http://localhost:9000/api/errors/"+id); 
 
    return data;
}
