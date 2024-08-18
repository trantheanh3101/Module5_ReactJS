import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
  const hello = (name) => {
    alert(`hello ${name}`)
  }

  const students = [
      {
        id:1,
        name: "thế anh",
        address: "Thanh hoá",
        points: 9
    },
    {
      id:2,
      name: "thế anh",
      address: "Thanh hoá",
      points: 4
    },
    {
      id:3,
      name: "thế anh",
      address: "Thanh hoá",
      points: 2
    },
    {
      id:4,
      name: "thế anh",
      address: "Thanh hoá",
      points: 7
    }
  ]
  return (
      <>
        <div>
          <table>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Name</th>
                <th>Address</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
            {
              students.map((item,index) =>
                <tr key={item.id}>
                  <th>{index}</th>
                  <th>{item.name}</th>
                  <th>{item.address}</th>
                  <th>{ item.points == 10 ? "Xuât sắc"
                      : item.points >=8 ? "Giỏi"
                      : item.points >= 6.5 ? "Khá"
                      : item.points >= 5 ? "Trung bình"
                      : item.points >=3.5 ? "Yếu"
                      : "Kém"}</th>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
        <div>
          <h1>List of fruits</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <ul>
              {fruits.map(item => (
                  <li>{item}</li>
              ))}
          </ul>
        </div>
        <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
            <form>
                <img className="mb-4"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                     alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control password" id="floatingPassword" placeholder="Password"/>
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={() => hello("thế anh")}>Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div>
    </div>
      </>
  );

}

export default App;
