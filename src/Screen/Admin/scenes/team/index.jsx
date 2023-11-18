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
const Team = () => {
  const [account, setAccount] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
      .then(response => setAccount(response.data))
      .catch(error => console.log(error));
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", },
    {
      field: "name",
      headerName: "Tên",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone_number",
      headerName: "Số điện thoại",
      flex: 0.6,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    }, 
    {
      field: "password",
      headerName: "Password",
      flex: 1,
    }, 
    {
      field: "role",
      headerName: "Access Level",
      flex: 0.7,
      renderCell: ({ row: { role} }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin"
                ? colors.greenAccent[600]
                : role === "customer"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {role === "admin" && <SecurityOutlinedIcon />}
            {role === "customer"&& <LockOpenOutlinedIcon />}
            {role === "blockcustomer"&& <LockClockIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM"/>
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
        <DataGrid rows={account} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
