import axios from "axios";
import { useState } from "react";


 const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      console.log("Email already exists");
      return user;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await axios.get("http://localhost:6001/users").then((res) => checkEmail(res.data, email ));
    
    if (users) {
      alert("Email already exists!");
    } else {
      const user = { username, email, password };
      await axios.post("http://localhost:6001/users", user).then(alert("User registered"));
    }  
    setUsername("");
    setEmail("");
    setPassword("");  
  };

  

  return (
      <div >
        <form>
          <h1>Register</h1>
              <input type="text"
                  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />   
                      
              <input type="email"
                  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                          
              <input type="password"
                  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />   
                              
                  
              <button className="btn" type="submit" onClick={handleSubmit}>
                Submit   
              </button>
          </form>
        </div>
);
};

export default Register;