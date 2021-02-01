import Example from "./components/navbar";
import "./App.css";
import Footer from "./components/footer";
import CarouselPart from "./components/carousel.js";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from "./components/homepage";

function App() {
  return (
    <div className="App">
      <Example />

      <div>
        <Switch>
          <Route exact path="/">
            <CarouselPart />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
