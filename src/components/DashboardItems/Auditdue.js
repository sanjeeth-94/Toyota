import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { ViewAuditDue } from '../../services/ApiServices';

const Auditdue = () => {
    const [rows,setRows] = useState([]);
    const [loading,setLoading]=useState([]);
    
    const columns = [
        { field: 'auditName', headerName: 'Audit Name', width: 250 },
        { field: 'department', headerName: 'Department', width: 250 },
        { field: 'section', headerName: 'Section', width: 250 },
        { field: 'assetType', headerName: 'Asset Type', width: 250 },
    ];
    
    useEffect(()=>{
        ViewAuditDue(handleViewAuditDueResult,handleViewAuditDueError)

    },[]);

    const handleViewAuditDueResult=(dataObject)=>{
        setRows(dataObject.data);
        setLoading(false);
        console.log(dataObject.data);
    }
    
    const handleViewAuditDueError=(errorStaus, errorMessage)=>{
        console.log(errorMessage)
    }
  
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                style={{alignSelf:'center',textAlign:'center'}}>
                    <h3>AUDIT DUE</h3>
                </Grid>
            </Grid>
            <hr/>
            <Grid  container spacing={2} style={{ marginTop: '10px'}}>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                style={{ height: '400px',  marginTop: '20px',marginLeft:'5%' }}>
                    <DataGrid
                    loading={loading}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Auditdue;