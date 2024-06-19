import React, { useState } from 'react';
import SuccessPopup from './SuccessPopUp';

const CreateDestination = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePostDestination = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6 relative min-h-screen font-poppins">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-medium text-[#000000]">Destinations</h1>
          <h2 className="text-lg text-[#B8B8B8] font-normal">Create a new destination</h2>
        </div>
        <button className="flex items-center bg-none text-[#414141] text-sm font-normal  px-6 py-3 rounded-lg border border-[#A8A8A8]">
          <img src="draft.png" alt="" className="mr-2" />
          Drafts
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handlePostDestination}
          className="bg-[#4F55E4] text-[#FFFFFF] text-base font-medium  px-6 py-3 rounded-2xl"
        >
          Post Destination on website
        </button>
      </div>

      {showPopup && <SuccessPopup onClose={closePopup} />}
    </div>
  );
};

export default CreateDestination;
