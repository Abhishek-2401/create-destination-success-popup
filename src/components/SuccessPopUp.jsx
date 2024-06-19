import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-[#222222]"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src="successpopup.png" alt="Success" className="mx-auto mb-4 w-40 h-40" />
        <h2 className="text-xl font-normal text-[#222222] mb-4">Destination posted <span className="font-semibold">successfully!</span></h2>
      
        <div className="flex justify-around mb-4">
          <button
            onClick=''
            className="flex items-center border border-[#404040] text-[#707070] text-base font-normal px-4 py-2 rounded-lg"
          >
           <img src="destination-icon.png" alt="" className="mr-3" />
            Go to all destinations list 
          </button>
          <button
            onClick=''
            className="flex items-center border border-[#404040] text-[#707070] text-base font-normal px-4 ml-4 py-2 rounded-lg"
          >
           <img src="share-icon.png" alt="" className="mr-3" />
            Share
          </button>
        </div>
        <button
          onClick=""
          className="text-[#222222] text-xl font-normal underline flex items-center justify-center mt-6  mx-auto mb-4"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          Add New Destination
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
