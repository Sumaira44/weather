
"use client";
import  React,{ useState } from 'react';
const API_Key="6af2563be20d8f15672fc64b8c6bae11";
const MyForm =() =>{
  const [cityinput,setCityInput]=useState(" " );
  const[weatherData,setweatherdata]=useState<any>({});{city :" "}
  const handleChange = (e)=> {
    setCityInput(e.target.value);
    
  }; 
  async function getData() {
// console.log("Pressed");
const apiurl="https://api.openweathermap.org/data/2.5/weather? " 
try{
const response= await fetch(apiurl +
  "q=" + 
  cityinput +
  "&appid=" +
  API_Key+
  "&units=imperial")

const data=await response.json();
console.log(data);
if(data ?.cod==="400") throw data;
setweatherdata(data);
} catch(err){
  throw new Error('error in fetching')
}
 } 
 
  
// const city=weatherData.main && weatherData.main.name ;
  const temp=weatherData.main&&weatherData.main.temp;
  const condition=weatherData.weather && weatherData.weather[0].description; 


  return (
  <div 
    style={{
 position : "static",
   height : "100vh",
   backgroundImage :"url(/w1.jpg)",
   backgroundSize: "cover"
    }
    }>
      <div className="flex justify-center width:400px min-height: 200 p-20 boarder :30">
         <form className='px-10 py-5  bg-black-500 border rounded-md '>
         <div className='w-full flex flex-col'>
          <h1 className='flex justify-center block text-grey-900 text-sm font-bold'> Check weather</h1>
          <div></div>
          <label className='p-3 block text-grey-900 text-sm font-bold mb-2' > Enter City</label>
          <input  className="shadow appearance-non border rounded w-full "type='text'  id='cityname' w-40 onChange={handleChange}/>
          </div>
          <div className=' p-4 flex items-center justify-center'>

          <button type="submit" className='border border-blue-700 rounded-full w-20 h-10 bg-blue-500 py-2 px-4'
          onClick={()=> getData()}>Submit</button>
          </div>
          <div className='p-2 flex justify-center flex-col'>
          <h2 className='p-2 block text-grey-900 text-sm font-bold'>Weather in{cityinput}</h2>
          <p className='p-2 block text-grey-900 text-sm font-bold '>Temperature: {temp} <br/>
          Condition : {condition }</p>
          </div>
         </form>
         
      
    </div>
    </div>

)
}
export default MyForm;







    
  
