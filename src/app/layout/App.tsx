
import { Container } from "semantic-ui-react"
import NavBar from "./nav/NavBar"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../common/modal/ModalManager";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { logout, signIn } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";



function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(auth, {
      next: user => {
        if (user) {
          dispatch(signIn(user))
        } else {
          dispatch(logout());
        }
      },
      error: error => console.log(error),
      complete: () => { }
    })
  }, [dispatch])

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <ScrollRestoration />
          <ModalManager />
          <NavBar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default App

