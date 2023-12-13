import React from "react";
import "./../../Style-header.css";
import "./Header.css";
import { Link } from "react-router-dom";

function handleOut(event){
   localStorage.removeItem('whoLogin');
   localStorage.removeItem('userId');
   // console.log(localStorage.getItem('userId'));
   window.location.reload();
}

export default function AdminHeader(){
    const notificationCount = 3;
    return(
        <div className="Header-Admin">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* <a class="navbar-brand">Navbar</a> */}
                    <a className="navbar-brand" >
                        <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="5" height="5"/>
                    </a>
                    <div className="settings">
                        <button class="btn btn-outline-success" type="submit" onClick={handleOut}>
                        <Link to="/login" className="btn" type="button">Đăng Xuất</Link>
                        </button>
                        {/* <button className="btn" type="button" onClick={handleOut}><i class='bx bx-power-off' style={{ fontSize: '2em' }}></i></button> */}
                    </div>           
                </div>
            </nav>
        </div>
    )

}
