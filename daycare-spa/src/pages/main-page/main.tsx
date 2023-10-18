import { useEffect, useState } from "react";
import { IUser } from "../../types/global.typing";
import "../main-page/main.scss";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../hooks/get-user/get-user";
import Navbar from "../../components/navbar/navbar";
import { useIdleTimeout } from "../../components/session/session-timeout";

const Main = () => {
  const [users, setUsers] = useState<IUser>({
    userId: 0,
    name: "",
    role: "",
  });
  const redirect = useNavigate();

  const handleIdle = () => {
    redirect("/session-modal");
  };

  const { idleTimer } = useIdleTimeout({ onIdle: handleIdle, idleTime: 5 });

  const fetchUser = async () => {
    const result = await GetUser();
    setUsers({
      userId: result.data.userId,
      name: result.data.name,
      role: result.data.role,
    });
  };

  useEffect(() => {
    fetchUser();
  }, [users]);

  return (
    <div className="default">
      <Navbar />
      <h1>Hi {users?.name}, you are logged in!</h1>
    </div>
  );
};

export default Main;
