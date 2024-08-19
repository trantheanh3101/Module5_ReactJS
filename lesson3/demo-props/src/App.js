import './App.css';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';
import AddComponent1 from './components/AddComponent1';
import CounterComponent from './components/CounterComponent';
import CounterComponentF from './components/CounterComponent-F';
import ChangeColor from './components/ChangeColor';
import DisplayDelete from './components/DisplayDelete';
import Time from './components/Time';
import Logout from "./components/Logout";
import Alert from "./components/Alert";
function App() {
  return (
      <>
          <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
          <Logout/>
          <div className="App">
              <Welcome name="Admin" id="1"/>
          </div>
          <Time/>
          <AddComponent firstNumber={1} secondNumber={2}/>
          <AddComponent1 firstNumber={3} secondNumber={2}/>
          <CounterComponent/>
          <CounterComponentF/>
          <ChangeColor/>
          <DisplayDelete/>
      </>
  );
}
export default App;
