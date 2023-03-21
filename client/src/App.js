import { React } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Error from './Components/Error';
import { useState } from 'react';
function App() {
  // const [user, setLoginUser] = useState({});

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />}>
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Signin setLoginUser={setLoginUser} />
            )}
          </Route> */}

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
