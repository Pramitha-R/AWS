import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";

const MainPage = () => {
    return(
        <React.Fragment>
            <section>
                <div className="header">
                    <Navbar/>
                </div>
                <div className="container">
                    <NavPage/>
                </div>
            </section>
        </React.Fragment>
    );
}
export default MainPage;