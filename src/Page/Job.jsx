
import App from "../App";
import "./Job.css"

function Job() {
  return (
    <div className='grid grid-cols-5  w-full'>

<div className="col-span-1 bg-white-100 overflow-y-auto max-h-screen ">
        <div className="flex gap-32">
        <h2 className="text-lg font-bold mb-4 text-center mt-5 border-l-8 border-red-500">Incomplete</h2>
        <h2 className="mt-6 text-lg font-bold w-16 text-center">0</h2>
        </div>
        <App />
      </div>


      <div className="col-span-1 bg-white-100 overflow-y-auto max-h-screen ">
        <div className="flex gap-32">
        <h2 className="text-lg font-bold mb-4 text-center mt-5 border-l-8 border-blue-300">Todo</h2>
        <h2 className="mt-6 text-lg font-bold w-16 text-center">0</h2>
        </div>
        <App />
      </div>


   

      <div className="col-span-1 bg-white-100 overflow-y-auto max-h-screen ">
        <div className="flex gap-32">
        <h2 className="text-lg font-bold mb-4 text-center mt-5 border-l-8 border-yellow-300">Doing</h2>
        <h2 className="mt-6 text-lg font-bold  w-16 text-center">0</h2>
        </div>
        <App />
      </div>


      <div className="col-span-1 bg-white-100 overflow-y-auto max-h-screen ">
        <div className="flex gap-12">
        <h2 className="text-lg font-bold mb-4 text-center mt-5 ">Under Review</h2>
        <h2 className="mt-6 text-lg font-bold w-12 text-center">0</h2>
        </div>
        <App />
      </div>
      

      <div className="col-span-1 bg-white-100 overflow-y-auto max-h-screen ">
        <div className="flex gap-16">
        <h2 className="text-lg font-bold mb-4 text-center mt-5  ">Completed</h2>
        <h2 className="mt-6 text-lg font-bold  w-16 text-center">0</h2>
        </div>
        <App />
      </div>
      



     
      
    </div>
  );
}

export default Job;

