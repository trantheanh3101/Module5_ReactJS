import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import MyForm from './demo/MyForm';
import FileUploadPage from "./demo/FileUploadPage";
import CheckAge from "./demo/CheckAge";
import CheckAgeHaveSubmit from "./demo/CheckAgeHaveSubmit";
import CheckAgeMessError from "./demo/CheckAgeMessError";

function App() {
  return (
    <>
        {/*<CheckAge/>*/}
        {/*<CheckAgeHaveSubmit/>*/}
        <CheckAgeMessError/>
        {/*<MyForm/>*/}
        {/*<FileUploadPage/>*/}
    </>
  );
}

export default App;
