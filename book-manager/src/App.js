import './App.css';
import BookList from "./components/books/BookList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <BookList/>
        <ToastContainer />
    </>
  );
}

export default App;
