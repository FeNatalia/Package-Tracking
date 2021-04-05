//Project files
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Header from "./components/Header";

import "./styles/style.css";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route component={Home} path ="/" exact/>
        <Route component={Track} path ="/track" exact/>
        {/* <Route path="/track/:parcel_id" component={Package}/> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

