import React, { useState } from "react";
import calendarIcon from "../../assets/Events/eventIcon.png";
import eventsData from "./eventsDetail";
import EventModal from "./EventModal";
import Header from "../otherComponents/navbar";
import Footer from "../otherComponents/footer";


const Events = (event) => {
    const [modalData, setModalData] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = (event)=>{
        setIsModalOpen(true);
        setModalData(event)
    }
  return (
    <>
    <div className="bg-img">
    <Header/>
    <div className="flex flex-col justify-center items-center gap-y-20">
        {
            isModalOpen && <EventModal modalData={modalData} setIsModalOpen={setIsModalOpen}/>
        }
      <h1 className="text-3xl font-semibold flex flex-col items-center text-[#4285F4] gap-y-3 mt-14">
        <img className="w-[4rem]" src={calendarIcon} />
        Our Events
      </h1>

      {eventsData.map((event) => {
        return (
          <div
            className="flex flex-col justify-center items-center gap-4 my-4"
            key={event.id}
          >
            <img className="w-[18rem]" src={event.eventImg} />
            <h3 className="text-[#5F6368] font-semibold text-xl w-[20rem] text-center">
              {event.eventName}
            </h3>
            <button onClick={()=>handleModal(event)} className="text-[#3771C8] border border-[#3771C8] py-2 px-6 rounded-lg hover:bg-[#3771C8] hover:text-white transition duration-200">
              view
            </button>
          </div>
        );
      })}
    </div>
    <Footer/>
    </div>

    </>
  );
};

export default Events;
