import  { useState, useEffect } from 'react';
import pic1 from "../src/Page/c1.png";
import pic2 from "../src/Page/ne1.png";
import m1 from "../src/Page/m1.jpeg";
import m2 from "../src/Page/m2.jpeg";
import { FaBuffer } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";

import ModalForm from './ModalForm';


const App = () => {
  const [data, setData] = useState([]);
  const [link,setLink] =useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Fetch data from the API
    fetch('https://job1task.onrender.com/link')
      .then((response) => response.json())
      .then((fetchedData) => setLink(fetchedData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://job1task.onrender.com/task')
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <div className="grid grid-cols-1 gap-2 p-2 ">
      {data.map((item, index) => (
        <div key={index} className="p-1  rounded mb-3 bg-gray-300">
         {/* image */}
         <div className='flex gap-4 max-w-xs'>
      <div className='flex items-center '>
        <img src={pic1} alt="" className='w-4 h-4 rounded-full' />
        <h6 className='text-xs font-bold'>Client Name</h6>
      </div>

      <div className='flex items-center '>
        <img src={pic2} alt="" className='w-4 h-4 rounded-full' />
        <h6 className='text-xs font-bold'>Sadiq Istiak</h6>
      </div>
       </div>


          {/* text*/}
          <div className='flex gap-4 max-w-xs mt-4'>
      <div className='flex items-center '>
          <FaBuffer />
        <h6 className='text-xs font-thin'>{item.description}</h6>
      </div>
      <div className='flex'>
      <FaClipboardList /> 
      <h6 className='text-xs font-medium'>{item.task_count}</h6>
      </div>
      
      
       </div>


         {/* date*/}
         <div className='flex gap-4 max-w-xs mt-4'>
         <div className='flex items-center '>
        <img src={m1} alt="" className='w-4 h-4 rounded-full' />
        <img src={m2} alt="" className='w-4 h-4 rounded-full' />
        <span className='w-5 h-4 rounded-full bg-stone-300 font-medium text-xs'>12+</span>
        <FaComments />
      <span className='text-xs font-medium '>{item.chatlist_count}</span>
  
      <div>
      <button
        onClick={handleOpenModal}
        className="mt-2"
      >
      <FaLink></FaLink>
      </button>

      {isModalOpen && <ModalForm onClose={handleCloseModal} />}
    </div>


      
      
      <span className='text-xs font-medium'>{link.length}</span>
      <FaCalendarDays></FaCalendarDays>
      <span className='text-xs font-medium'>{item.date}</span>
      </div>
      
      
      
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