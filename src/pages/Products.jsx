// import products from "../assets/JsonData/products.json";
import Table from "../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://my.api.mockaroo.com";

const productTableHead = [
  "",
  "نام کالا",
  "قیمت",
  "موجودی",
  "خریداری شده",
  "دسته بندی",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;


const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.first_name}</td>
    <td>{item.email}</td>
    <td>{item.ip_address}</td>
  </tr>
);


const Products = () => {
  //   const [data, setData] = useState([])

  //   const fetchData = () => {
  //     axios
  //         .get('/posts')
  //         .then((res) => {
  //             console.log(res.data);
  //             setData(res.data)
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/pruducts.json?key=614e2dd0");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="page-header">مشتریان</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {loading && <div>Loading</div>}
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
