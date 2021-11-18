import React, { useEffect, useState } from "react";
import { Products, Navbar, Cart, Checkout, Auth } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from "./components/auth/firebase-config"

const App = () => {
  // product management states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
 


  // authentication states
  const [user, setUser] = useState({})
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // handling auth state changes
  auth.onAuthStateChanged((currentUser)=>{
    setUser(currentUser)
  })


  const register = async ()=>{
    try{
      const newUser = await auth.createUserWithEmailAndPassword(registerEmail,registerPassword)
    }catch(error){
      console.log(error.message);
    }
  }  

  const login = async ()=>{
    try{
      const newUser = await auth.signInWithEmailAndPassword(loginEmail,loginPassword)
    }catch(error){
      console.log(error.message);
    }
  } 
  const logout = async ()=>{
    await auth.signOut()

  }


  // authentication functions


// product management 
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    // console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    // console.log(response);
    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    // console.log(item);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    // updating cart
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    // console.log(response.cart);
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    console.log(newCart);
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <>
    {!user?.email?<Auth user={user} registerUser={register} loginUser={login} allAuthStates={{setUser,setRegisterEmail,setRegisterPassword,setLoginEmail,setLoginPassword}}/>:(
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}></Navbar>
        <Switch>

          <Route exact path="/auth">
          </Route>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
            ></Products>
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty={handleUpdateCartQty}
            ></Cart>
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            ></Checkout>
          </Route>
        </Switch>
      </div>
    </Router>
    )}
  </>
  );
};

export default App;
