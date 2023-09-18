import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import EventCarousel from "./EventCarousel";





const EventModal = ({ modalData, setIsModalOpen }) => {
  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
  
        >
          {/* Dim area without animation */}
          <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Modal content with animation */}
          <motion.div
            className="bg-white p-6 relative rounded-lg shadow-lg z-10 flex flex-col justify-center items-center gap-y-10 max-w-[80vw] max-h-[90vh] mdM:max-w-[95vw] mdM:max-h-[93vh] overflow-y-scroll no-scrollbar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalAnimation}
          >
            
            <div onClick={()=>setIsModalOpen(false)} className="absolute top-2 right-2 cursor-pointer w-[1.5rem] h-[1.5rem] rounded-full flex flex-col justify-center items-center">
              <div className="w-5 h-[3px] bg-slate-600 rounded-lg rotate-45 translate-y-[3px]"></div>
              <div className="w-5 h-[3px] bg-slate-600 rounded-lg -rotate-45"></div>
            </div>

              <div className="flex flex-col justify-center items-center gap-y-10">

            <p className="text-xl text-[#5F6368] font-semibold text-center mt-4">{modalData.eventName}</p>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <p className="font-medium">{modalData.facilitator}</p>
            <p className="text-[#5F6368] font-medium">( Facilitators )</p>
            <div className="flex flex-col justify-center items-start self-start">
            <p className="text-[#5F636899]">Date</p>
            <p className="font-medium">{modalData.date}</p>
           </div>
           <div className="flex flex-col justify-center items-start">
            <p className="text-[#5F636899]">Description</p>
            <p className="font-medium">{modalData.description}</p>
           </div>
            </div>
            <div>
            <EventCarousel modalData={modalData}/>
            </div>
              </div>

          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;
