import { useNavigate } from "react-router"; 
import "../index.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="btn-logout"  >
      Logout
    </button>
  );
}

export default Logout;