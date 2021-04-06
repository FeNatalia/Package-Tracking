// NPM Package
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

//Project files
import Home from "./pages/Home";
import Track from "./pages/Track";
import Header from "./components/Header";
import "./styles/style.css";
// import Package from "./components/PackageDetails";
// import SearchResults from "./pages/SearchResults";

export default function App() {

  return (
    <div className="App">
      <RecoilRoot>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route component={Home} path ="/" exact/>
        <Route component={Track} path ="/track" exact/>
        {/* <Route path="/track/:id" component={Package}/>
        <Route component={SearchResults} path="/results/:query"/> */}
      </Switch>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

