import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Orders from "./Components/Orders";
import { auth } from "./firebase";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./firebaseAuthContext";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "LOGIN_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "LOGIN_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute redirectTo="/login" path="/orders">
              <Header />
              <Orders />
            </ProtectedRoute>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <ProtectedRoute redirectTo="/login" path="/checkout">
              <Header />
              <Checkout />
            </ProtectedRoute>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
