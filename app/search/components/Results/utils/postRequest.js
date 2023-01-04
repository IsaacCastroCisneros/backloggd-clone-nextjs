import axios from 'axios';

export default async function postRequest(type,query)
{
   const headers = 
   {
     headers:
     {
        'Accept': 'application/json',
        'Client-ID' : 'nka18j1va3jccldqvsbiktmdcayxah',
        'Authorization' :  'Bearer u4wsdvj01kncvzo3c17wxvnmqm1vpm',
     }
   }
   
   return await axios.post(`https://api.igdb.com/v4/${type}/`,query,headers)
}

