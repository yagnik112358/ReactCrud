import './App.css';
import Header from "./components/Header"
import { ToastContainer ,toast } from 'react-toastify';
import {Button, Container,Row,Col} from 'reactstrap';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import Menus from './components/Menus';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AddCourses from './components/AddCourses';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
function App() {
  const notify = () => {
    toast.success("Done!");
    // toast.error("error in code");
  };

  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Container className="text-center wy-3">
        <Header/>
        <Row>
            <Col md={4}>
              <Menus/>
            </Col>  
            <Col md={8}>

              <Route path="/" component={Home} exact/>

              <Route path="/add-course" component={AddCourses} exact/>
              
              <Route path="/view-courses" component={AllCourses} exact/>          

              <Route path="/view-employees" component={AllEmployees} exact/>          

              <Route path="/add-employee" component={AddEmployee} exact/>          

            </Col>
          </Row>  
        </Container> 
      </Router>   
    </div>
  );
}

export default App;
