
import App from "../App";

function Job() {
  return (
    <div className='grid grid-cols-5  w-full'>

      {/* First Column - Incomplete */}
      <div className="col-span-1 bg-gray-100  overflow-y-auto max-h-screen ">
        <h2 className="text-lg font-bold mb-4">Incomplete</h2>
        <App />
      </div>


       {/* First Column - Incomplete */}
       <div className="col-span-1 bg-gray-100  overflow-y-auto max-h-screen ">
        <h2 className="text-lg font-bold mb-4">Incomplete</h2>
        <App />
      </div>

      {/* Third Column */}
      <div className="col-span-1">
        <App />
      </div>

      {/* Fourth Column */}
      <div className="col-span-1">
        <App />
      </div>

      {/* Fifth Column */}
      <div className="col-span-1">
        <App />
      </div>

      
    </div>
  );
}

export default Job;

