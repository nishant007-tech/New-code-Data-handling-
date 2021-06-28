import "./App.css";
import Form from "./Components/Form";
import Movie from "./Components/Movie";
import Navbar from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Form} />
      <Route exact path='/video-library' component={Movie} />
      <Route exact path='/merged-videos' component={Movie} />
    </Router>
  );
};

export default App;
