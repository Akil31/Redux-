// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './Component/Home';
import ProductsDetails from './Component/ProductsDetails';
import ProductsListing from './Component/ProuctsListing';
import ProductsComponent from './Component/ProuductsComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route path="/de" >
         <ProductsDetails />
          </Route>
        <Route path="/p">
          <ProductsListing />
        </Route>
        <Route>404 Not Found !</Route>

      </BrowserRouter>

      <ProductsComponent/>
      {/* <prodcut_reducer/>   */}
    </div>
  );
}

export default App;
