import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Description from './components/Description';
import Form from './components/Form';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Submit from './Submit';


function Home() {
  return (
    <div className="App">
      
     <Navbar/>
     <Header/>
     <Form/>
     <Description/>
     
 
    </div>
  );
}

export default Home;
