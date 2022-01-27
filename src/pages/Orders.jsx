import orders from "../assets/JsonData/orders_list.json";
import Badge from "../components/badge/Badge";
import Table from "../components/table/Table";

const latestOrders = ["شماره سفارش", "کاربر", "قیمت", "تاریخ", "وضعیت"];

const orderStatus = {
  "خريداری شده": "primary",
  "در انتظار تایید": "warning",
  "پرداخت شده": "success",
  "بازپرداخت": "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
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
);

const Orders = () => {
  return (
    <div>
      <h2 className="page-header">سفارشات</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={latestOrders}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={orders}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
