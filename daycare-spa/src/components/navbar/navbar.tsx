import "../navbar/navbar.scss";
import { Menu } from "@mui/icons-material";
import logo from "../logo/facts.png";
import { changePassword, loginUrl } from "../../constant/url.constant";
import { GetUser } from "../../hooks/get-user/get-user";
import { useEffect, useState } from "react";
import { IUser } from "../../types/global.typing";
import newTab from "../img/new-tab.png";
import { useNavigate } from "react-router-dom";
import { CheckClaims } from "../../hooks/check-claims/check-claims";

const Navbar = () => {
  const [result, setResult] = useState(Boolean);
  const [users, setUsers] = useState<IUser>({
    userId: 0,
    name: "",
    role: "",
  });

  const redirect = useNavigate();

  function loginPassport() {
    window.location.replace(loginUrl);
  }

  function LogoutTrigger() {
    redirect("/logout");
  }

  function ChangePassword() {
    window.open(changePassword, "_blank", "noreferrer");
  }

  const claims = async () => {
    const response = await CheckClaims();
    setResult(response.data);
  };

  const fetchUser = async () => {
    const result = await GetUser();
    setUsers({
      userId: result.data.userId,
      name: result.data.name,
      role: result.data.role,
    });
  };

  useEffect(() => {
    claims();
    console.log(result);
    if (result === true) {
      fetchUser();
    }
  }, [result]);

  return (
    <div className="navbar">
      <div className="home">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="links">
        <ul>
          {result === false ? (
            <button className="button-login" onClick={loginPassport}>
              Login
            </button>
          ) : (
            <div className="dropdown">
              <span>Hi, {users.name}!</span>
              <div className="dropdown-content">
                <p onClick={ChangePassword}>
                  Change Password <img src={newTab} className="new-tab" />
                </p>
                <br />
                <p onClick={LogoutTrigger}>
                  Logout <img src={newTab} className="new-tab" />
                </p>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
