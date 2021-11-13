import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Apartments from './Pages/Apartments/Apartments';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/Home/About/About';
import Reviews from './Pages/Reviews/Reviews';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Dashboard/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders';
import AddApartment from './Pages/Dashboard/Admin/AddApartment/AddApartment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/navbar">
            <Navbar></Navbar>
          </Route>
          <PrivateRoute path="/apartments">
            <Apartments></Apartments>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path="/aboutus">
            <About></About>
          </Route>
          <AdminRoute path="/addApartment">
            <AddApartment></AddApartment>
          </AdminRoute>
          <AdminRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path="/allOrders">
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
