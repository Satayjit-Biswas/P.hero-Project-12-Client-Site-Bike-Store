import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AllProduct from "./components/AllProduct/AllProduct";
import AuthProvider from "./components/Context/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import Home from './components/Home/Home/Home';
import ProductDetails from "./components/Home/Product/ProductDetails/ProductDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Share/Footer/Footer";
import Header from "./components/Share/Header/Header";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path='/productdetails/:id'>
                <ProductDetails></ProductDetails>
            </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/allproduct">
                <AllProduct></AllProduct>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
