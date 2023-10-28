import React, { useState, useEffect }  from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../../../component/Admin/components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from 'axios';
const Comments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/Model/commentView-data.php')
      .then(response => setComment(response.data))
      .catch(error => console.log(error));
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "car_name",
      headerName: "Car Name",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1, 
    },
    {
      field: "date_time",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 0.5,
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 0.6,
    },

  ];

  return (
    <Box m="20px">
      <Header
        title="Bình luận - Đánh giá"
      />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={comment}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Comments;
