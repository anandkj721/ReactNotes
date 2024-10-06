import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from  "./components/Cards";
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";

const App = () => {
  
  const[courses,setCourses]=useState('');
  
  useEffect(()=>{
    const fetchData =async()=>{
      try {
        const res=await fetch(apiUrl);
        const output=await res.json();
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    }
    fetchData();
  },[]);

  return(
    <div>

      <div>
          <Navbar></Navbar>
      </div>
      

       <div>
          <Filter filterData={filterData}></Filter>
      </div>

      <div>
         <Cards  courses={courses}></Cards>  
      </div>
      
      
    </div>
  );
   
};

export default App;
