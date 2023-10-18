import { useEffect, useState } from "react";
import { logoutUrl, daycareUrl } from "../../constant/url.constant";
import { CheckClaims } from "../../hooks/check-claims/check-claims";

const Logout = () => {
  const [result, setResult] = useState<Boolean>(true);

  const claims = async () => {
    const response = await CheckClaims();
    setResult(response.data);
  };

  function LogoutTrigger() {
    window.open(logoutUrl, "_blank", "noreferrer");
  }

  useEffect(() => {
    LogoutTrigger();
  }, []);

  useEffect(() => {
    claims();
    const intervalId = setInterval(() => {
      claims();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (result === false) {
      window.location.replace(daycareUrl);
    }
  });

  return (
    <div className="default">
      <h1>Redirecting to Login Page...</h1>
    </div>
  );
};

export default Logout;
