import Menu from "../../assets/menu.svg";
import Avatar from "../../assets/avatar.svg";
import SwitchUser from "../../assets/switch-user.svg";
import "./styles.css";

const SideNav: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-top">
        <img src={Menu} alt="" />
        <span className="brand-name">Smartwage</span>
      </div>
      <div className="main-nav-bottom">
        <img src={Avatar} alt="avatar" />
        <span className="user-name">
          <span className={"secondary-user"}>Mike Metelerkamp</span>
          <span className="primary-user">McDonalds</span>
        </span>
        <span className="change-user">
          <img src={SwitchUser} alt="" />
        </span>
      </div>
    </nav>
  );
};

export default SideNav;
