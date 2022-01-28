import comments from "../assets/JsonData/comments.json";
import Table from "../components/table/Table";

const commentsTableHead = [
  "",
  "نام",
  "ایمیل",
  "نظر",
  "کالا",
  "امتیاز",
];

const renderHead = (item, index)=> <th key={index}>{item}</th>

const renderBody = (item, index)=>(
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.comment}</td>
        <td>{item.product}</td>
        <td>{item.stars}</td>
    </tr>
)

const Comments = () => {
  return (
    <div>
      <h2 className="page-header">نظرات</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
            <Table
                limit= '10'
                headData={commentsTableHead}
                renderHead={(item, index)=> renderHead(item, index)}
                bodyData={comments}
                renderBody={(item, index)=> renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
