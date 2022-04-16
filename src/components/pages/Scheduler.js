import React, {useState, useEffect } from "react";
import axios from 'axios'
import MaterialTable from 'material-table'
import {Checkbox} from '@material-ui/core'


const columns = [

  { title: "Name", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Required" : true,     sorting: false },
  
  {
    title: "Email", field: "email",
    validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true,
    sorting: false
  },
  {
    field: 'number',
    title: 'Phone Number',
    sorting: false,
    validate: rowData => rowData.number === undefined || rowData.number === "" ? "Required" : true
  },
  {
    field: 'appointmentType',
    title: 'Appointment Type',
    sorting: false,
    validate: rowData => rowData.appointmentType === undefined || rowData.appointmentType === "" ? "Required" : true,

  },
  {
    field: 'description',
    title: 'Description',
    sorting: false
  },
  {
    field: 'date',
    title: 'Date',
    type: 'date',
    validate: rowData => rowData.date === undefined || rowData.date === "" ? "Required" : true,
    defaultSort: 'asc',
  }, 
  {
    field: 'time',
    title:'Time',
    type: 'time',
    validate: rowData => rowData.time === undefined || rowData.time === "" ? "Required" : true,
    defaultSort: 'asc',
    filtering: false 
  }
];



const Scheduler = () => {

  const [tableData, setTableData] = useState([]);
  const [filter, setFilter]=useState(false)

  const handleChange=()=>{
    setFilter(!filter)
   }

  const url = "https://gastro-mombasa.herokuapp.com/api/patients"

  useEffect(() => {
    fetchData()
  }, [])



  const fetchData = async () => {
    const {data} = await axios.get(url)
    setTableData(data.data)
  }



  
  return  (
    <div style={{display: 'flex', flexDirection: 'column', paddingTop: 100}}>
      <div style={{textAlign: 'center', paddingBottom: 30}}>
          <h1>Appointments</h1>
      </div>
      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <div style={{height: 400, width: '90%'}}>
          <MaterialTable 
            columns={columns}
            data={tableData}
            title="Patient Data"
            detailPanel={[
              {
                tooltip: 'Show Name',
                render: rowData => {
                  return (
                    <div
                      style={{
                        paddingLeft: 30
                      }}
                    >
                      {rowData.description}
                    </div>
                  )
                },
              }]}
            options={{actionsColumnIndex: -1, sorting: true, filtering: filter, emptyRowsWhenPaging: false, pageSize: 10, addRowPosition: "first"}}
            actions={[
              {
                icon:()=><Checkbox
                checked={filter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'pri  mary checkbox' }}
              />,
              tooltip:"Hide/Show Filter option",
              isFreeAction:true
              },
            ]}
            editable={{
              onRowAdd: (newData) => new Promise((resolve, reject) => {
                //Backend call
                fetch(url, {
                  method: "POST",
                  headers: {
                    'Content-type': "application/json"
                  },
                  body: JSON.stringify(newData)
                }).then(resp => resp.json())
                  .then(resp => {
                    fetchData()
                    resolve()
                  },2000)
                  
              }),
              onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                //Backend call
                fetch(url + "/" + oldData._id, {
                  method: "PATCH",
                  headers: {
                    'Content-type': "application/json"
                  },
                  body: JSON.stringify(newData)
                }).then(resp => resp.json())
                  .then(resp => {
                    fetchData()
                    resolve()
                  },2000)
              }),
              onRowDelete: (oldData) => new Promise((resolve, reject) => {
                fetch(url + "/" + oldData._id, {
                  method: "DELETE",
                  headers: {
                    'Content-type': "application/json"
                  },
    
                }).then(resp => resp.json())
                  .then(resp => {
                    fetchData()
                    resolve()
                  })
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Scheduler;