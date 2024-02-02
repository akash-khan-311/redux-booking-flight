/* eslint-disable no-case-declarations */
import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
import initialState from "./initialState";

// const nextBookingId = (bookings) => {
//   const maxId = bookings.reduce(
//     (maxId, booking) => Math.max(booking.id, maxId),
//     -1
//   );
//   return maxId + 1;
// };

const reducer = (state = initialState, action) => {
  const copiedState = [...state]
  const {type,payload,id} = action
  switch (type) {
    case ADD_BOOKING:
      if(state.length >= 3){
        return state;
      }
      const lastBookId = copiedState[copiedState.length - 1]?.id
      const newBook = { ...payload, id: lastBookId ? (lastBookId + 1) : 1 }
      copiedState.push(newBook)
      return copiedState
      case DELETE_BOOKING:
        const updatedState = state.filter(book => book.id !== id)
        return updatedState
    default:
      return state;
  }
};


export default reducer

