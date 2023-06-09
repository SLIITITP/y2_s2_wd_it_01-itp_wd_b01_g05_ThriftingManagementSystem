 /*import React, { Component } from 'react'
import axios from 'axios'
import '../Employee.css'

export default class UpdateEmployeeDetails extends Component{
  state = {
    empName: '',
    empNIC: '',
    empEmail: '',
    empMobileNo: '',
    empPost: '' 
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmitDetails = (event) => {
    event.preventDefault();
    const { empName, empNIC, empEmail, empMobileNo, empPost } = this.state;
    
    axios.put(`/employee/`, { empName, empNIC, empEmail, empMobileNo, empPost })
      .then((response) => {
        console.log(response);
        // Do something after successful update
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }
  
  render() {
    const { empName, empNIC, empEmail, empMobileNo, empPost } = this.state;
    return (

      <div>
        <h2 style={{marginLeft:"20px",marginTop:"65px"}}>Update Employee Details</h2>
        
      
        <div id="Employeerectangle">
        <div className='inline-formsEmployee'>
            
            <br></br><br></br>
            <form onSubmit={this.onSubmitDetails}></form>
            <table>
            <tr>
              <td><label>Name : </label></td>
              <td><input type='text' className='form-inputEmployee' name='empName' value={empName} onChange={this.handleInputChange}  placeholder='Enter Employee Name'/></td>
            </tr>

            <tr>
            <td><label>NIC : </label></td>
            <td><input type='text' className='form-inputEmployee' name='empNIC' value={empNIC} onChange={this.handleInputChange} placeholder='Enter NIC number'/></td>
          </tr>

            <tr>
             <td> <label>Email : </label></td>
            <td><input type='text' className='form-inputEmployee' style={{marginTop:"20px"}} name='empEmail' value={empEmail} onChange={this.handleInputChange} placeholder='employee@gmail.com'/></td>
            </tr>

            <tr>
             <td> <label>Mobile No : </label></td>
            <td><input type='tel' className='form-inputEmployee' style={{marginTop:"20px"}} value={empMobileNo} onChange={this.handleInputChange} placeholder="0??????????" pattern="[0-9][10]"  name='empMobileNo'  required/></td>
            </tr>

             <tr>
              <td><label>Post : </label></td>
              <select className='form-select' style={{width:"240%" , marginTop:"20px"}} name='empPost' value={empPost} onChange={this.handleInputChange} >
              <option>Select One</option>
              <option>Delivery drivers</option>
              <option>Secuirity officer</option>
              <option>Inventory keepers</option>
              <option>Cleaner</option>
              </select></tr>

              <a href='/employee/DisplayAllEmployeeDetails'><button type='submit' className='btn btn-warning' onClick={this.onSubmitDetails} style={{marginLeft:"200px", marginTop:"20px"}}>Update</button></a>
              
            </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <br/>
      </div>





    )
  }
}



import React, { Component } from 'react'
import axios from 'axios'
import '../Employee.css'

export default class UpdateEmployeeDetails extends Component{
  render() {
    return (

      <div>
        <h2 style={{marginLeft:"20px",marginTop:"65px"}}>Update Employee Details</h2>
        
      
        <div id="Employeerectangle">
        <div className='inline-formsEmployee'>
            
            <br></br><br></br>
            <table>
            <tr>
              <td><label>Name : </label></td>
              <td><input type='text' className='form-inputEmployee' name='empName'   placeholder='Enter Employee Name'/></td>
            </tr>

            <tr>
            <td><label>NIC : </label></td>
            <td><input type='text' className='form-inputEmployee' name='empNIC'  placeholder='Enter NIC number'/></td>
          </tr>

            <tr>
             <td> <label>Email : </label></td>
            <td><input type='text' className='form-inputEmployee' style={{marginTop:"20px"}} name='empEmail' placeholder='employee@gmail.com'/></td>
            </tr>

            <tr>
             <td> <label>Mobile No : </label></td>
            <td><input type='tel' className='form-inputEmployee' style={{marginTop:"20px"}} placeholder="0??????????" pattern="[0-9][10]"  name='empMobileNo'  required/></td>
            </tr>

             <tr>
              <td><label>Post : </label></td>
              <select className='form-select' style={{width:"240%" , marginTop:"20px"}} name='empPost' >
              <option>Delivery drivers</option>
              <option>Secuirity officer</option>
              <option>Inventory keepers</option>
              <option>Cleaner</option>
              </select></tr>

              

              <a href='/employee/DisplayAllEmployeeDetails'><button type='submit' className='btn btn-warning' onClick={this.onSubmitDetails} style={{marginLeft:"200px", marginTop:"20px"}}>Update</button></a>
              
            </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <br/>
      </div>





    )
  }
}                      
*/


import React, { Component } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import '../employee.css'

export default function Updateemployees() {
  const {id} = useParams()
  return (
      <div>
          <UpdateemployeeBody id = {id}/>
      </div>
  )
}

class UpdateemployeeBody extends Component {
  constructor(props) {
      super(props)
      this.state = {
          id: props.id,
          empID: "",
          empName: "",
          empNIC: "",
          empEmail: "",
          empMobileNo: "",
          supPost: "",
          employeeDetails:[],
      }
      this.handleInputValueChange = this.handleInputValueChange.bind(this)
      this.onSubmitUpdate = this.onSubmitUpdate.bind(this)
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/employeeGet/updateEmployeeDetails/get/${this.state.id}`).then(res => {
        if(res.data.success){
            this.setState({
                employeeDetails: res.data.existingDetails,
                empID: res.data.existingDetails.empID,
                empName: res.data.existingDetails.empName,
                empNIC: res.data.existingDetails.empNIC,
                empEmail: res.data.existingDetails.empEmail,
                empMobileNo: res.data.existingDetails.empMobileNo,
                empPost: res.data.existingDetails.empPost,
            })
        }
    }).catch((err) => {
        console.error("error: ",err)
    })
}


  handleInputValueChange = (e) => {
    const {value,name} = e.target
    this.setState({
        ...this.state, [name]:value
    })
  }

  onSubmitUpdate(){

    const {empName, empNIC,empEmail, empMobileNo, empPost} = this.state
    const data = {
      empName:empName,
      empNIC:empNIC,
      empEmail:empEmail,
      empMobileNo:empMobileNo,
      empPost:empPost   
    }

    axios.put(`http://localhost:8000/employeePut/updateemployee/put/${this.state.id}`,data).then((res) => {
      console.log("Successfully Updated")
    })
  }


  render() {
    return (

      <div>
        <h2 style={{marginLeft:"20px",marginTop:"65px"}}>Update Employee Details</h2>
        
      
        <div id="Employeerectangle">
        <div className='inline-formsEmployee'>
            
            <br></br><br></br>
            <table>

            <tr>
              <td><label>Employee ID : </label></td>
              <td><input type='text' className='form-inputEmployee' value={this.state.empID} onChange={this.handleInputValueChange} name='empID' placeholder='Enter Employee ID'/></td>
            </tr>

            <tr>
              <td><label>Employee Name : </label></td>
              <td><input type='text' className='form-inputEmployee' style={{marginTop:"20px"}} value={this.state.empName} onChange={this.handleInputValueChange} name='empName'   placeholder='Enter Employee Name'/></td>
              {this.state.empName}
            </tr>

            <tr>
            <td><label>Employee NIC : </label></td>
            <td><input type='text' className='form-inputEmployee' style={{marginTop:"20px"}} value={this.state.empNIC} onChange={this.handleInputValueChange} name='empNIC'   placeholder='Enter Employee NIC'/></td>
          </tr>

          <tr>
          <td> <label>Employee Email : </label></td>
         <td><input type='text' className='form-inputEmployee' style={{marginTop:"20px"}} value={this.state.empEmail} onChange={this.handleInputValueChange} name='empEmail' placeholder='employee@gmail.com'/></td>
         </tr>


            <tr>
             <td> <label>Employee Mobile No : </label></td>
            <td><input type='tel' className='form-inputEmployee' style={{marginTop:"20px"}} value={this.state.empMobileNo} onChange={this.handleInputValueChange} placeholder="0??????????"  name='empMobileNo'/></td>
            </tr>

           

             <tr>
              <td><label>Post : </label></td>
              <select className='form-select' style={{width:"240%" , marginTop:"20px"}} value={this.state.empPost} onChange={this.handleInputValueChange} name='empPost' >
              <option>Select One</option>
              <option>Delivery drivers</option>
              <option>Secuirity officer</option>
              <option>Inventory keepers</option>
              <option>Cleaner</option>
              
              </select></tr>

              

              <a href={`/employee/DisplayAllEmployeeDetails`}><button type='submit' onClick={this.onSubmitUpdate} className='btn btn-warning' style={{marginLeft:"200px", marginTop:"20px"}}>Update</button></a>
              
            </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <br/>
      </div>





    )
  }
}