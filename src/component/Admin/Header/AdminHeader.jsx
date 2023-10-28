import React from "react";
import "./../../Style-header.css";
import "./Header.css";
export default function AdminHeader(){
    const notificationCount = 3;
    return(
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="container">
                        <a href="#" className="navbar-brand" ><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="70" height="70"/></a>
                        <div className="settings">
                            <button className="btn" type="button"><i class='bx bx-power-off' style={{ fontSize: '2em' }}></i></button>
                        </div>           
                    </div>        
                </div>
            </nav>
        </div>
    )

}
