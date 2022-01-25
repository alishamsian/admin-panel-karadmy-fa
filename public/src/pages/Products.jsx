import products from "../assets/JsonData/products.json";
import Table from "../components/table/Table";

const customerTableHead = [
  "",
  "نام",
  "ایمیل",
  "شماره",
  "کل سفارشات",
];

const renderHead = (item, index)=> <th key={index}>{item}</th>

const renderBody = (item, index)=>(
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        
    </tr>
)

const Products = () => {
  return (
    <div>
      <h2 className="page-header">مشتریان</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
            <Table
                limit= '10'
                headData={customerTableHead}
                renderHead={(item, index)=> renderHead(item, index)}
                bodyData={products}
                renderBody={(item, index)=> renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
