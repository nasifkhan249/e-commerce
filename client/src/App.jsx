import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminView from "./components/Admin-View/AdminView";
import Dashboard from "./pages/Admin-View/Dashboard";
import Features from "./pages/Admin-View/Features";
import Order from "./pages/Admin-View/Order";
import Products from "./pages/Admin-View/Products";
import ShoppingView from "./components/Shopping-View/ShoppingView";
import NotFound from "./pages/NotFoundPage/NotFound";
import Home from "./pages/Shopping-View/Home";
import Listing from "./pages/Shopping-View/Listing";
import Account from "./pages/Shopping-View/Account";
import CheckOutPage from "./pages/Shopping-View/CheckOutPage";
import AuthCheck from "./common/AuthCheck";


const App = () => {
  const isAuthenticated=true;
  const user ={
    name: 'nasif',
    role : "admin"
  };
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>

        <Routes>
            <Route path="/auth" element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <Auth/>
              </AuthCheck>
            }>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>

            <Route path="/admin" element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <AdminView/>
              </AuthCheck>
            }>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="features" element={<Features/>}/>
                <Route path="order" element={<Order/>}/>
                <Route path="product" element={<Products/>}/>
            </Route>

            <Route path="/shop" element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <ShoppingView/>
              </AuthCheck>
            }>
                <Route path="home" element={<Home/>}/>
                <Route path="listing" element={<Listing/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="check-out" element={<CheckOutPage/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
     
    </div>
  )
};

export default App;
