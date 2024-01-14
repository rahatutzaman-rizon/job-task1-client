import { useEffect, useState } from "react";


const ModalForm = ({ onClose }) => {
    const [link,setLink] =useState([]);
    useEffect(() => {
        // Fetch data from the API
        fetch('https://job1task.onrender.com/link')
          .then((response) => response.json())
          .then((fetchedData) => setLink(fetchedData))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-sky-500 bg-opacity-75 absolute inset-0"></div>
      <div className="bg-teal-500 p-6 rounded shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">Link list</h2>
        <ul>
        {link.map((linkItem) => (
          <li key={linkItem._id}>
            <a href={linkItem.link}  >
              {linkItem.link}
            </a>
          </li>
        ))}
      </ul>

        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
