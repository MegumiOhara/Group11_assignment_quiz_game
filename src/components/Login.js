import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password);
    if (user.email === email && user.password === password) {
      return user;
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Cannot leave email or password blank.");
      return;
    }

    const users = await axios.get("http://localhost:6001/users").then((res) => checkUser(res.data, email, password)).catch((err) => console.log(err));

    if (users) {
      alert(` Welcome ${users.username} to Quiz game!`);
      navigate("/levels");
      localStorage.setItem("user", JSON.stringify(users.id));
    } else {
      alert("User not found. Please register");
      navigate("/Register");
    }  
    setEmail("");
    setPassword("");  
  }


  return (
    <div>
      <form>
        <h1>Login</h1>
                                     
          <input type="email"
            placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            
          <input type="password"
            placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />   
                                
                  
          <button className="btn"  type="submit" onClick={handleSubmit} >
          Submit   
          </button>
      </form>
    </div>
  )
};

export default Login;
  