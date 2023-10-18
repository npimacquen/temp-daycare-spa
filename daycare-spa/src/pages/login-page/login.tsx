import "../login-page/login.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { CheckClaims } from "../../hooks/check-claims/check-claims";

const Login = () => {
  const redirect = useNavigate();
  const [result, setResult] = useState(Boolean);

  const claims = async () => {
    const response = await CheckClaims();
    setResult(response.data);
  };

  useEffect(() => {
    claims();
    if (result === true) {
      redirect("/main");
    } else if (result === false) {
      redirect("/login");
    } else {
      alert("Server Error!");
    }
  }, [result]);

  return (
    <div>
      <Navbar />
      <div className="default">
        <h1>Welcome to Daycare!</h1>
      </div>
    </div>
  );
};

export default Login;
