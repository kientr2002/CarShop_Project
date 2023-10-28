import React, { useState, useEffect }  from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "./../../../../component/Admin/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockClockIcon from '@mui/icons-material/LockClock';
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/Model/ProductView-data.php')
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 1, },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    }, 
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
    }, 
    {
      field: "img",
      headerName: "Image",
      flex: 1,
      renderCell: ({ row: { img} }) => {
        return (
          <a href={img} style={{ textDecoration: "none"}}>Hình ảnh</a>
        );
      },
    },
    {
      field: "acceleration",
      headerName: "Acceleration",
      flex: 1,
    },
    {
      field: "max_speed",
      headerName: "Max Speed",
      flex: 1,
    },
    {
      field: "wattage",
      headerName: "Wattage",
      flex: 1,
    },
    {
      field: "torque",
      headerName: "Torque",
      flex: 1,
    },
    {
      field: "fuel_consumption",
      headerName: "Fuel Consumption",
      flex: 1,
    },
    {
      field: "emissions_co2",
      headerName: "Emissions CO2",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Sản Phẩm"/>
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
        <DataGrid rows={product} columns={columns} />
      </Box>
    </Box>
  );
};

export default Product;
