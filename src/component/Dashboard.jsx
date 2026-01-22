import React from "react";


const Dashboard=()=>{

    return(
        <div>

            <h1 className="text-center text-3xl font-bold mt-10 mb-10 text-black">To Do Dashboard</h1>

        <div className="p-16">
            <div className="flex justify-center flex-col items-center gap-4 border-2 border-black p-4 bg-green-500 text-white">
                <h1 className="text-2xl font-bold">To do Task Add</h1>
                <input  type="text" placeholder="Type here" className="input input-ghost border-2 border-black " />

                <button className="btn btn-neutral">Add</button>
            </div>

        </div>


        <div>
            <h1>To do list</h1>

            <div className="flex gap-4">
                <h1>name</h1>
                <button>Done</button>
                <button>Cancel</button>
            </div>
        </div>



    


        </div>
    )
}


export default Dashboard;

