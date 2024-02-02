import { combineReducers } from "redux";
import reducer from "./booking/reducer";

const rootReducer = combineReducers({
    bookings: reducer
})


export default rootReducer