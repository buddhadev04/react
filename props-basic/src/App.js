import './App.css';
import Card from './components/Card';

function App() {
  const myArr = [1,2,3]
  const myObj = {
    name: "mono",
    age: 23
  }
  return (
    <>
    <Card btnName="where to go" arr={myArr}/>
    <Card btnName="go somewere" obj = {myObj}/>
    </>
    
  );
}

export default App;
