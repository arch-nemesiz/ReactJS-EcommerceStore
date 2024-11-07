# ECommerce-App-using-React-JS
ECommerce App using React JS with Fetch API to Get Products Data

API data fetched from "https://fakestoreapi.com/products"

please install these packages 
    npm i react-router-dom 
    npm install react-redux
    npm i react-loading-skeleton
    npm install bootstrap
    npm install font-awesome
    npm install redux react-redux

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


javascript answer
-------------------

let arr=[1,1,2,4,5,66,6,66,8,];
let freq={};

for(let i=0;i<arr.length;i++)
{
    let num=arr[i];
    if(freq[num])
        {
            freq[num]++;
        }
    else
        {
            freq[num]=1;
        }
}   

console.log(freq);
