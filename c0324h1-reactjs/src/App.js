import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import StudentList from './component/students/StudentList';
import TeacherList from './component/teachers/TeacherList';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import AddStudent from "./component/students/AddStudent";
import EditStudent from "./component/students/EditStudent";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path = "/listStudent" element={<StudentList/>}/>
                  <Route path = "/listTeacher" element={<TeacherList/>}/>
              </Routes>
              <ToastContainer />
          </BrowserRouter>
      </>
  );
}
export default App;
