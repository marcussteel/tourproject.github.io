
import data from './helper/data'
import './App.css';
import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';



function App() {
  console.log(data);


  return (
    <div className="App" style={{ backgroundColor: 'rgb(65, 192, 228)' }}>
    <Navbar/>
    <Header/>
    <Card data={data}/>

hi
    </div>
  );
}

export default App;
