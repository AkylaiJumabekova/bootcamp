import './App.css';
import Data from './components/Data';
import Navbar from './components/Navbar';

function App() {
  let arr =['Tom', 'Jessica', 'Jeck'];

  const getInfo = (data) => {
    return console.log(data);
  }

  return (
    <>
    {/* some comment */}
    <Data arr ={arr} getInfo={getInfo}/> 
    {/* просто возвращает заданное количество раз */}
    {/* <Data />
    <Data />
    <Data />
    <Navbar /> */}
    </>
  );
}

export default App;
