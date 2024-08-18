import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);
//
// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Apricot",
//     "Black rowan",
//     "Cranberry"
// ];
//
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
//
// root1.render(
//     <div>
//         <h1>List of fruits</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         <ul>
//             {fruits.map(item => (
//                 <li>{item}</li>
//             ))}
//         </ul>
//     </div>
// );
//
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
//
// const fruitItems = [];
// fruits.forEach(item => {
//     fruitItems.push(<li key={item}>{item}</li>);
// });
//
// root2.render(
//     <div>
//         <h1>List of fruits</h1>
//         <ul>
//             {fruitItems}
//         </ul>
//     </div>,
//
//     <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//             <form>
//                 <img className="mb-4"
//                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
//                      alt="" width="72" height="57"/>
//                 <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//                 <div className="form-floating">
//                     <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
//                     <label>Email address</label>
//                 </div>
//                 <div className="form-floating">
//                     <input type="password" className="form-control password" id="floatingPassword" placeholder="Password"/>
//                     <label>Password</label>
//                 </div>
//                 <div className="checkbox mb-3">
//                     <label>
//                         <input type="checkbox"/> Remember me
//                     </label>
//                 </div>
//                 <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//                 <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//             </form>
//         </div>
//     </div>
// );
//
// const root3 = ReactDOM.createRoot(document.getElementById("root3"));
//
// root3.render(
//     <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//             <form>
//                 <img className="mb-4"
//                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
//                      alt="" width="72" height="57"/>
//                 <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//                 <div className="form-floating">
//                     <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
//                     <label>Email address</label>
//                 </div>
//                 <div className="form-floating">
//                     <input type="password" className="form-control password" id="floatingPassword" placeholder="Password"/>
//                     <label>Password</label>
//                 </div>
//                 <div className="checkbox mb-3">
//                     <label>
//                         <input type="checkbox"/> Remember me
//                     </label>
//                 </div>
//                 <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//                 <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//             </form>
//         </div>
//     </div>
// );


