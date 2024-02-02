import { useState } from "react";
import { addBooking } from "../Redux/booking/action";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable react/no-unescaped-entities */
const BookingSection = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=> state.bookings)
    const [Dfrom,setDfom] = useState('')
    const [Dto,setDto] = useState('')
    const [person,setPerson] = useState('')
    const [bookingClass,setBookingClass] = useState('')
    const submitForm = event=> {
        event.preventDefault()
        const form = event.target;
     const destinationFrom = Dfrom;
     const destinationTo = Dto;
     const journeyDate = form.date.value;
     const guests = person;
     const bClass = bookingClass;


     const formData = {
        id: data.id,
        destinationFrom,
        destinationTo,
        journeyDate,
        guests,
        bookingClass: bClass
     }
    //  console.log(formData)
     dispatch(addBooking(formData))
     form.reset()
  
    }

    
  return (
    
    <>
      <section>
        {/* Input Data */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form onSubmit={submitForm} className="first-hero lws-inputform">
              {/* From */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./src/assets/images/icons/Frame.svg" alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    onChange={(e)=> setDfom(e.target.value)}
                  >
                    <option  value hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                  </select>
                </div>
              </div>
              {/* To */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./src/assets/images/icons/Frame.svg" alt />
                  <select
                  onChange={(e)=> setDto(e.target.value)}
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
               
                  </select>
                </div>
              </div>
              {/* Date */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                />
              </div>
              {/* Guests */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./src/assets/images/icons/Vector (1).svg" alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    onChange={(e)=> setPerson(e.target.value)}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons</option>
                    <option value={3}>3 Persons</option>
                    <option value={4}>4 Persons</option>
                  </select>
                </div>
              </div>
              {/* Class */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src="./src/assets/images/icons/Vector (3).svg" alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                    onChange={(e)=> setBookingClass(e.target.value)}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>
              <button disabled={data.length >= 3 ? true : false } className="addCity disabled:bg-gray-500 disabled:hover:shadow-none disabled:text-white" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>
        {/* Preview Data */}
       
      </section>
    </>
  );
};

export default BookingSection;
