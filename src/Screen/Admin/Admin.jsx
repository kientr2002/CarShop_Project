import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Comments from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Product from "./scenes/products";
import './Admin.css';
import AdminHeader from './../../component/Admin/Header/AdminHeader';

function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <div className="home">
        <div>
          <AdminHeader/>
        </div>
        <div>
          <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/product" element={<Product />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
        </div>
      </div>
  );
}

export default Admin;
