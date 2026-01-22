import { useQuery } from "@tanstack/react-query";
import React from "react";

const Index=()=>{


{/*
useQuery({
  queryKey: ['tools'],
  queryFn: async () => {
    const response = await fetch('http://localhost:3000/tools')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response;
  },
})

*/}



   return(

<div className="flex justify-center mt-40">

<form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <fieldset className="fieldset">
    <label className="label">Email</label>
    <input type="email" className="input validator" placeholder="Email" required />
    <p className="validator-hint hidden">Required</p>
    </fieldset>

    <label className="fieldset">
    <span className="label">Password</span>
    <input type="password" className="input validator" placeholder="Password" required />
    <span className="validator-hint hidden">Required</span>
    </label>

    <button className="btn btn-neutral mt-4" type="submit">Login</button>
    
</form>


    </div>
)
    

}

export default Index;