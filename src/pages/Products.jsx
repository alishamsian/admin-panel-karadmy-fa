
import products from "../assets/JsonData/products.json";
import Table from "../components/table/Table";
import axios from "axios";
import { useState , useEffect } from "react";

const productTableHead = [
  "",
  "نام کالا",
  "قیمت",
  "موجودی",
  "خریداری شده",
  "دسته بندی"
];

const renderHead = (item, index)=> <th key={index}>{item}</th>




const renderBody = (item, index)=>(
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
        <td>{item.sold}</td>
        <td>{item.category}</td>
        
    </tr>
)

const Products = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.sampleapis.com/beers/ale")
    .then((res) =>{
      setData(res.data)
  
      console.log(data)
    }).catch();
  }, [])
  


  return (
    <div>
      <h2 className="page-header">مشتریان</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
            <Table
                limit= '10'
                headData={productTableHead}
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
