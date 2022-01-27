import categoriesCard from "../assets/JsonData/categories_card.json";
import StatusCard from "../components/status-card/StatusCard";
// import Table from "../components/table/Table";

const Categories = () => {
  return (
    <div>
      <h2 className="page-header">دسته بندی ها</h2>
      <div className="row">
      <div className="col-12">
          <div className="row">
            {categoriesCard.map((item, index) => (
              <div className="col-3" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
  );
};

export default Categories;
