// import customerList from "../assets/JsonData/customers-list.json";
import Loader from "../components/loader/Loader";
import Table from "../components/table/Table";
import useAxios from "../hooks/useAxios/useAxios";

const customerTableHead = [
  "",
  "نام",
  "ایمیل",
  "شماره",
  "کل سفارشات",
  "کل هزینه",
  "آدرس",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.first_name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  const { data, loading } = useAxios({ url: "/customers.json?key=614e2dd0" });

  return (
    <div>
      <h2 className="page-header">مشتریان</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {loading && <Loader />}
              {!loading && (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={data}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
