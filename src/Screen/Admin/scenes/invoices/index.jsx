import React, { useState, useEffect }  from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../../../component/Admin/data/mockData";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/Model/BuyHistoryInvoice-data.php')
      .then(response => setInvoices(response.data))
      .catch(error => console.log(error));
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "id", headerName: "ID" },
    {
      field: "car_id",
      headerName: "car ID",
      flex: 1,
    },    
    {
      field: "car_name",
      headerName: "Car name",
      flex: 1,
    },
    {
      field: "date_time",
      headerName: "time",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Cost",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Lịch sử giao dịch" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#5941BB",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#5941BB",
          },
        }}
      >
        <DataGrid rows={invoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
