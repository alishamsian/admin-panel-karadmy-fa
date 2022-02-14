import DropDown from "../dropdown/DropDown";
import "./topnav.css";
import user_image from "../../assets/images/prof1.jpg";

const curr_user = {
  display_name: "Amir Sabahi",
  Image: user_image
};


const renderUserToggle = (user) => (
  <div className="topnav__left-user">
    <div className="topnav__left-user__name">{user.display_name}</div>
    <div className="topnav__left-user__image">
      <img src={user.Image} alt="" />
    </div>
  </div>
);


const TopNav = () => {
  return (
    <div>
      <div className="topnav">
        <div className="topnav__search">
          <input type="text" placeholder="جست و جو ..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="topnav__left">
          <div className="topnav__left-item">
            <DropDown
              customToggle={() => renderUserToggle(curr_user)}
            />
          </div>
          <div className="topnav__left-item">
            <DropDown
              icon="bx bx-bell"
              badge="12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
