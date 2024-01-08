import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
