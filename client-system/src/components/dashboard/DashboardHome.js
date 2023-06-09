import React, { Component } from "react";
import "./dashboard.css";
/*import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Visibility } from "@material-ui/icons";
import Button from "@material-ui/core/Button";*/

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export default class DashboardHome extends Component {
  Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  render() {
    const data = [
      { name: "Cloths", users: 500 },
      { name: "Electronic", users: 1000 },
      { name: "Books", users: 2000 },
      { name: "Furniture", users: 5000 },
      { name: "Music", users: 4000 },
    ];

    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="head-title"> Dashboard</h1>
        <hr />
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer" style={{marginLeft:"auto",marginRight:"auto",width:"65%"}}>
              <span className="featuredMoney">Rs. 85,000</span>
              <span className="featuredMoneyRate" style={{color:"green"}}>
              <i class="fa-solid fa-arrow-up"></i>
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer" style={{marginLeft:"auto",marginRight:"auto",width:"65%"}}>
              <span className="featuredMoney">RS. 44,415</span>
              <span className="featuredMoneyRate" style={{color:"red"}}>
              <i class="fa-solid fa-arrow-down" ></i>
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer" style={{marginLeft:"auto",marginRight:"auto",width:"65%"}}>
              <span className="featuredMoney">Rs. 22,225</span>
              <span className="featuredMoneyRate" style={{color:"green"}}>
              <i class="fa-solid fa-arrow-up"></i>
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
        <br />

        <div className="dashHome">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>

        <br />
        <div className="main">
          <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
              <li className="widgetSmListItem">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Pasindu Thathsara</span>
                </div>
                <button className="widgetSmButton">
                <i class="fa-solid fa-eye"></i>&nbsp;
                  Display
                </button>
              </li>
              <li className="widgetSmListItem">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Pradeepa Kodippili</span>
                </div>
                <button className="widgetSmButton">
                <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;
                  Display
                </button>
              </li>
              <li className="widgetSmListItem">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Sayuri Perera</span>
                </div>
                <button className="widgetSmButton">
                <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;
                  Display
                </button>
              </li>
              <li className="widgetSmListItem">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Wimalagamuwa</span>
                </div>
                <button className="widgetSmButton">
                <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;
                  Display
                </button>
              </li>
              <li className="widgetSmListItem">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Fedric Almeda</span>
                </div>
                <button className="widgetSmButton">&nbs
                <i class="fa-solid fa-eye"></i> 
                &nbsp;&nbsp;Display
                </button>
              </li>
            </ul>
          </div>

          <br />

          <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">14 Jun 2023</td>
                <td className="widgetLgAmount">Rs.800.00</td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">Fedric Almeda</span>
                </td>
                <td className="widgetLgDate">25 Aug 2023</td>
                <td className="widgetLgAmount">Rs.1500.00</td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">Dhananjaya Yapa</span>
                </td>
                <td className="widgetLgDate">2 Dec 2023</td>
                <td className="widgetLgAmount">Rs.200.00</td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">Mithila Uswatte</span>
                </td>
                <td className="widgetLgDate">7 sep 2023</td>
                <td className="widgetLgAmount">Rs.3000.00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
