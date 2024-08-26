import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import StudentList from './component/students/StudentList';
import TeacherList from './component/teachers/TeacherList';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";

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
