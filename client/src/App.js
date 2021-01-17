import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer className="bottom" />
      </div>
    </Router>
  );
}

export default App;
