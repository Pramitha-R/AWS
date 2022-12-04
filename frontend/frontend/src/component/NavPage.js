import React from 'react'
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PremiumContent from "../pages/PremiumContent";

const NavPage = () => {
  return (
    <React.Fragment>
            <section>
                <div>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/premium-content" element={<PremiumContent/>} />
                </div>
            </section>
        </React.Fragment>
  )
}

export default NavPage