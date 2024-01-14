import  { useState, useEffect } from 'react';
import pic1 from "../Page/c1.png";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/task')
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <div className="grid grid-cols-1 gap-4 p-8">
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded mb-4">
         {/* image */}
        <div className='flex'>
          
          <img src={pic1} alt="" />
        <div>

        </div>

        </div>


        <div>

        </div>

      </div>
    
      ))}
    </div>
  );
};

export default App;



{/* <div key={index} className="p-4 border rounded mb-4">
<h2 className="text-lg font-bold mb-4">{item.name}</h2>
<p>Description: {item.description}</p>
<p>Task Count: {item.task_count}</p>
<img src={item.image1} alt="Image 1" className="my-2" />
<img src={item.image2} alt="Image 2" className="my-2" />
<p>Users: {item.users}</p>
<p>Date: {item.date}</p>

<p>Chatlist Count: {item.chatlist_count}</p>
<p>Attach File Count: {item.attach_file_count}</p>
</div> */}