import "./statuscard.css";

const StatusCard = props => {
  return (
    <div className={`status-card status-card__${props.color}`}>
      <div className="status-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className={`status-card__info status-card__${props.type}`}>
          <h4>{props.count}</h4>
          <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
