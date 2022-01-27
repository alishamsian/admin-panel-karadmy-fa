import categoriesCard from "../assets/JsonData/categories_card.json";
import StatusCard from "../components/status-card/StatusCard";


const Categories = props => {
  return (
    <div>
      <h2 className="page-header">دسته بندی ها</h2>
      <div className="row">
      <div className="col-12">
          <div className="row">
            {categoriesCard.map((item, index) => (
              <div className="col-3" key={index}>
                <StatusCard
                  color={item["background-color"]}
                  type={'fs2'}
                  icon={item.icon}
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
