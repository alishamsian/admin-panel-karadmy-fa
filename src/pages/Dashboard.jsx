import statusCard from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/status-card/StatusCard";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

const chartOptions = {
  series: [
    {
      name: "مشتریان آنلاین",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "مشتریان فروشگاه",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: true,
    },
  },
};


const topCustomers = {
  head: [
    'کاربر',
    'کل سفارشات',
    'کل هزینه'
  ],
  body: [
    {
        "username": "علی",
        "order": "490",
        "price": "$15,870"
    },
    {
        "username": "مسعود",
        "order": "250",
        "price": "$12,251"
    },
    {
        "username": "آمنه",
        "order": "120",
        "price": "$10,840"
    },
    {
        "username": "شیما",
        "order": "110",
        "price": "$9,251"
    },
    {
        "username": "پگاه",
        "order": "80",
        "price": "$8,840"
    }
]
}

const rendrCusomerHead = (item, index)=>(
  <th key={index}>{item}</th>
)

const rendrCusomerbody = (item, index)=>(
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)


const latestOrders = {
  header: [
    "شماره سفارش",
    "کاربر",
    "قیمت",
    "تاریخ",
    "وضعیت"
],
body: [
    {
        id: "#OD1711",
        user: "علی شمسیان",
        date: "17 Jun 2021",
        price: "$900",
        status:"خريداری شده"
    },
    {
        id: "#OD1712",
        user: "پگاه",
        date: "1 Jun 2021",
        price: "$400",
        status:"پرداخت شده"
    },
    {
        id: "#OD1713",
        user: "شیما",
        date: "27 Jun 2021",
        price: "$200",
        status:"در انتظار تایید"
    },
    {
        id: "#OD1712",
        user: "اشکان",
        date: "1 Jun 2021",
        price: "$400",
        status: "پرداخت شده"
    },
    {
        id: "#OD1713",
        user: "آمنه",
        date: "27 Jun 2021",
        price: "$200",
        status: "بازپرداخت"
    }
]
}

const orderStatus = {
  "خريداری شده": "primary",
  "در انتظار تایید": "warning",
  "پرداخت شده": "success",
  "بازپرداخت": "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
      
  </tr>
)

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">داشبورد</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCard.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>مشتریان برتر</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index)=> rendrCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index)=> rendrCusomerbody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">مشاهده همه</Link>
            </div>
          </div>
        </div>
              <div className="col-8">
                <div className="card">
                  <div className="card__header">
                    <h3>آخرین سفارشات</h3>
                  </div>
                  <div className="card__body">
                  <Table
                    headData={latestOrders.header}
                    renderHead={(item, index)=> renderOrderHead(item, index)}
                    bodyData={latestOrders.body}
                    renderBody={(item, index)=> renderOrderBody(item, index)}
                  />
                  </div>
                  <div className="card__footer">
                    <Link to="/">مشاهده همه</Link>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Dashboard;
