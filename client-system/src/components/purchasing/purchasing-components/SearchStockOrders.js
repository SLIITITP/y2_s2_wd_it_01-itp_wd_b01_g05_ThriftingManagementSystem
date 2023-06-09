import React, { Component } from 'react'
import axios from 'axios'
import CancelStockOrder from './CancelStockOrder'
import { useLocation } from 'react-router-dom'

export default function SearchStockOrders() {
    const searchQuery = new URLSearchParams(useLocation().search)
    const orderQuery = searchQuery.get('searchQuery')
  return (
    <SearchStockOrdersBody orderQuery={orderQuery} />
  )
}

class SearchStockOrdersBody extends Component {
    constructor(props){
        super(props)
        this.state ={
          searchStocktockOrderDetails: [],
          orderQuery: props.orderQuery,
          searchQuery: "",
        }
    }
    
    componentDidMount(){
        this.setState({searchQuery:this.props.orderQuery})
        axios.get(`http://localhost:8000/purchasingGet/stockOrder/search?q=${this.state.orderQuery}`).then(res => {
            if(res.data.success){
                this.setState({
                    searchStocktockOrderDetails: res.data.searchedDetails
                })
            }
            
        })
    }

    handleSearchInput = (e) => {
        const {name, value} = e.target
        this.setState({
            ...this.state, [name]:value
        })
    }

    render() {
        return (
        <div className='Purchasing-others'>
            <h2 style={{marginTop:"70px"}}>Display Details of Stock Orders Related to <span style={{color:"#ff5520"}}>"{this.state.searchQuery}"</span> </h2>
            <div className='btn-inline'>
                <div><a href={`/purchasing/search-order/search?searchQuery=${this.state.searchQuery}`}><button type='submit' className='search'><i class="fa-solid fa-magnifying-glass"></i></button></a>
                <input className='search' style={{width:"500px"}} name='searchQuery' placeholder='Search Details By PurchaseID or Title or Supplier Name' value={this.state.searchQuery} onChange={this.handleSearchInput}></input></div>
                <a><button className='btn-inline'>Add Filter</button></a>
                <a><button className='btn-inline'>Clear Filter</button></a>
            </div>
            <br/>
            <br/>
    
            <div className='div-frame'>
                <table className='table-home' >
                    <thead>
                        <tr>
                            <th scope="col" className='table-home' style={{borderTopLeftRadius:"10px",borderBottom:"2px solid #ff5520"}}>PurID</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Title</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Placed Date</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Recieved Date</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Total Cost</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Total Qty</th>
                            <th scope="col" className='table-home' style={{borderBottom:"2px solid #ff5520"}}>Supplier</th>
                            <th scope="col" className='table-home' style={{border:"none",borderTopRightRadius:"10px",borderBottom:"2px solid #ff5520",width:"240px"}}>Options</th>
                        </tr>
                    </thead>
                    <tbody scope="raw" >      
                        {this.state.searchStocktockOrderDetails.map((results,index)=>(
                        <tr>
                            <td className='table-home'>{results.purID}{results.purDigitID}</td>
                            <td className='table-home' title={results.title}>{results.title}</td>
                            <td className='table-home'>{results.placedDate}</td>
                            <td className='table-home'>{results.receivedDate}</td>
                            <td className='table-home'>{results.totalCost}</td>
                            <td className='table-home'>{results.totalQty}</td>
                            <td className='table-home'>{results.supplier}</td>
                            <td className='table-home' style={{padding:"5px",border:"none"}}>
                                <div className='btn-inline-table'>
                                    <button type="button" className="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i> Update</button>
                                    <CancelStockOrder digitID={results.purDigitID} PID={results.purID} orderTitel={results.title} supplier={results.supplier} payment={results.paymentStatus} ID={results._id} />
                                    <a href={`/purchasing/${results._id}`}><button type="button" className="btn btn-primary"><i class="fa fa-circle-ellipsis"></i> More</button></a>
                                     
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='spec-btn-inline' style={{marginTop:"20px", width:"18%"}}>
                <div className='btn-inline'>  
                    <a href={`/purchasing/search-order/search?searchQuery=${this.state.searchQuery}`}><button className="btn btn-primary" ><i class="fa-solid fa-rotate-right"></i>&nbsp;&nbsp;Refresh</button></a> 
                    <a href={`/purchasing/purchasing-home`}><button className="btn btn-primary" ><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</button></a> 
                </div> 
            </div>
        </div>        
        )
    }
}
