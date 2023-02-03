import { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  const [logo, setLogo] = useState("Ultimate Todo App");


  return (
    <GlobalProvider>
         <Router>
      <>
        <Navbar logo={logo} />
        <div className="container mt-5 p-5">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Form />
                  <ListGroup  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
    </GlobalProvider>
  );
}

export default App;
