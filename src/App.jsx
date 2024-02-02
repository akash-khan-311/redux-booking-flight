import { Provider } from "react-redux";
import "./App.css";
import BookingSection from "./components/BookingSection";
import Header from "./components/Header";
import store from "./Redux/store";
import BookingList from "./components/BookingList";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BookingSection />
        <BookingList/>
      </Provider>
    </>
  );
}

export default App;
