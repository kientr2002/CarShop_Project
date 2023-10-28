import React from "react";
import ShowCart from "../Screen/User/Cart";
import ShowProducts from "../Screen/User/Products";
import Home from "../Screen/User/Home";
import { Link } from "react-router-dom";
import "./Style-header.css";
export default function Header(){
    return(
        <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand" ><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="70" height="70"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto" >
                    <li className="nav-item">
                    <Link to="/" className="nav-link" id="Title">Trang chủ</Link>
                    </li> 
                    <li className="nav-item active">
                        <a href="#" className="nav-link" id="Title">Tin tức</a> 
                    </li>
                    <li class="nav-item dropdown">
                    <Link to="/products" className="nav-link" id="Title">Sản phẩm</Link>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link" id="Title">Thông tin</a> 
                    </li>
                </ul>
                <div  className="d-flex me-2 " id="header-icon">
                <form role="search" className="d-flex">
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn" type="button"><i class='bx bx-search-alt-2' style={{ fontSize: '2em' }}></i></button>
                </form>
                </div>
                <div className="header-icon">
                <Link to="/cart" className="btn"><i class='bx bx-cart' style={{ fontSize: '2em' }}></i></Link>
                </div>
                <div className="header-icon">
                <Link to="/login" className="btn" type="button"><i class='bx bxs-user' style={{ fontSize: '2em' }}></i> </Link>
                </div>
            </div>
        </div>
        </nav>
        </div>
    )
}

