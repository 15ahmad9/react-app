import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Category from './components/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={Main} ></Route>
          <Route path="/Category" Component={Category} ></Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;
