import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import User from './Screen/User/User';
import Admin from "./Screen/Admin/Admin";
import  { useState} from 'react';
export default function App() {
  const [whoLogin, setWhoLogin] = useState('No');
  return (
    <div className="Body">
      {whoLogin !== "admin" && <User setWhoLogin= {setWhoLogin}/>}
      {whoLogin === "admin" && <Admin />}
    </div>
  );
}