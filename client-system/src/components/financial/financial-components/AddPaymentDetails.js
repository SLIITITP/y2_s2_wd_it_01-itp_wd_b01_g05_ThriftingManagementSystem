import React, {Component} from 'react'
import '../financial.css'
import axios from 'axios'


export default class extends Component{

  constructor(props){
    super(props)
    this.state={
        PaymentID:"",
        FullName:"",
        PaymentType:"",
        Amount:"",
        PaymentDate:"",
        CardNumber:"",
        ExpiredYear:"",
        CVC:""
    }
    this.onSubmit=this.onSubmit.bind(this)
}

   handleinput = (event) => {
    const {name,value}=event.target
    this.setState({
       ...this.state,[name]:value
    })
}

  onSubmit(){
    const {PaymentID,FullName,PaymentType,Amount,PaymentDate,CardNumber,ExpiredYear,CVC}=this.state
    const payment={
      paymentID:PaymentID,FullName:FullName,Pay_Type:PaymentType,Amount:Amount,Pay_Date:PaymentDate,Card_Number:CardNumber,Expired_Year:ExpiredYear,CVC:CVC
    }

    axios.post("http://localhost:8000/financePost/financeshow/post",payment).then((response)=>{
      console.log("success")
      this.state({success:true})
    }).catch(error=>{
       console.error("Error Occured:",error)
    })

  }
    render(){
        return (
            <div>
                <h2 style={{marginLeft:"20px",marginTop:"65px"}}>Add Payment Details</h2>
                <br></br>
                
                    
        <div id="payrectangle">
        <div className='pay-form'>
            
            <br></br><br></br>
            <table>
            <tr>
            <td><label>Payment ID:</label></td>
            <td><input type='text' className='form-input' name='PaymentID' value={this.state.PaymentID} onChange={this.handleinput} placeholder='Payment_ID'/></td><br></br>
            </tr>

            <tr>
             <td> <label>Full Name:</label></td>
            <td><input type='text' className='form-input' name='FullName' value={this.state.FullName} onChange={this.handleinput} placeholder='Full_Name'/></td><br></br>
            </tr>

              <tr>
              <td><label>Payment Type:</label></td>
              <select className='form-select' name='PaymentType' value={this.state.PaymentType} onChange={this.handleinput}  style={{width:"240%"}}>
                <option>Credit card</option>
                <option>Debit card</option>
                <option>Visa card</option>
                <option>American Express</option>
              </select></tr><br/>

               <tr>
              <td><label>Amount:</label></td>
              <td><input type='text' className='form-input' name='Amount' value={this.state.Amount} onChange={this.handleinput} placeholder='Amount'/></td><br></br>
              </tr>

              <tr>
              <td><label>Payment date:</label></td>
              <td><input type='date' className='form-input' name='PaymentDate' value={this.state.PaymentDate} onChange={this.handleinput} placeholder=''/></td>
              </tr>

              <tr>
              <td><label>Card Number:</label></td>
              <td><input type='text' className='form-input' name='CardNumber' value={this.state.CardNumber} onChange={this.handleinput} placeholder='1111-2222-3333-4444'/></td><br></br>
              </tr>

               <tr>
              <td><label>Expired Year:</label></td>
              <td><select className='form-select' name='ExpiredYear' value={this.state.ExpiredYear} onChange={this.handleinput} style={{width:"240%"}}>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select></td></tr><br/>

             <tr>
             <td> <label>CVV:</label></td>
              <td><input type='text' className='form-input' name='CVC' value={this.state.CVC} onChange={this.handleinput} placeholder='CVV'/></td><br></br>
              </tr>
              <br></br>

            
              <button onClick={this.onSubmit} className='btn btn-success'>ADD</button>
              
            </table>
            </div>
            
            <br></br>
            
    
          </div>
      </div>
    
            
            
        )

        
    }
}