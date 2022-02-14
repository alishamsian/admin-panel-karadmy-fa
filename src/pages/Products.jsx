// import products from "../assets/JsonData/products.json";
import Loader from "../components/loader/Loader";
import Table from "../components/table/Table";
import useAxios from "../hooks/useAxios/useAxios";

const productTableHead = [
  "",
  "شرکت خودرو",
  "مدل خودرو",
  "سال تولید",
  "رنگ",
  "قیمت",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;


const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.car_make}</td>
    <td>{item.car_model}</td>
    <td>{item.car_model_year}</td>
    <td>{item.color}</td>
    <td>{item.pricc}</td>
  </tr>
);


const Products = () => {
  
  const { data, loading } = useAxios({url: '/car.json?key=614e2dd0'})

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
                  headData={productTableHead}
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

export default Products;
