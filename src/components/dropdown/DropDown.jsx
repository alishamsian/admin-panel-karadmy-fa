import "./dropdown.css";


const DropDown = (props) => {

  return (
    <div className="dropdown">
      <button  className="dropdown__toggle">
          {
              props.icon ? <i className={props.icon}></i> : ''
          }
          {
              props.badge ? <span className="dropdown__toggle-badge">{props.badge}</span> : ''
          }
          {
              props.customToggle ? props.customToggle() : ''
          }

      </button>
    </div>
  );
};

export default DropDown;
