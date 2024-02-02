import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
import initialState from "./initialState";

const nextBookingId = (bookings) => {
  const maxId = bookings.reduce(
    (maxId, booking) => Math.max(booking.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
        if(state.length <= 3){
            return state;
        }
      return [...state, { id: nextBookingId(state), ...action.payload }];

      case DELETE_BOOKING:
      return state.filter(booking=> booking.id !== action.payload)
    default:
      return state;
  }
};

